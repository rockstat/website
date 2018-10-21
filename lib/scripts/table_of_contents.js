const yaml = require('js-yaml');
const path = require('path')
const mkdirp = require('mkdirp');
const fs = require('fs')

const banner = `/**
 * generated automatically / don't change manually!
 */
`

const setEnabled = (baseDir, items, level = 1) => {
  let hasActiveItems = false;
  let hrefs = [];

  for (const item of items) {
    item.level = level;
    let hasActiveChild = false;
    let fileExists = false;

    if (item.items) {
      const childData = setEnabled(baseDir, item.items, level + 1);
      if (childData.hasActiveItems) {
        hasActiveChild = true;
      }
      if (item.level >= 2) {
        item.hrefs = [...childData.hrefs]
      }

    }

    if (item.href) {
      hrefs.push(item.href)
      const fpath = path.join(baseDir, 'pages', item.href + '.mdx');
      const fdir = path.dirname(fpath)
      if (!fs.existsSync(fdir)) {
          mkdirp.sync(fdir)
      }
      fileExists = fs.existsSync(fpath);
    }

    if (fileExists || hasActiveChild) {
      Object.assign(item, { enabled: true });
      hasActiveItems = true;
    }

  }
  return {
    hasActiveItems, hrefs
  }
}

class TOCGenerator {

  constructor(basePath, src, dst) {
    this.basePath = basePath;
    this.src = src;
    this.dst = dst;
  }

  convert() {
    const data = this.read();
    setEnabled(this.basePath, data);
    this.write(data);
    return data;
  }

  encode(data) {
    return `${banner}\nexport default ${JSON.stringify(data, undefined, 2)}`
  }

  write(data) {
    const encoded = this.encode(data)
    fs.writeFileSync(path.join(this.basePath, this.dst), encoded)
  }

  read() {
    return yaml.load(fs.readFileSync(path.join(this.basePath, this.src)));
  }
}


module.exports = TOCGenerator;
