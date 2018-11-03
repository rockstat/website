const yaml = require('js-yaml');
const { dirname, join: joinPath } = require('path')
const mkdirp = require('mkdirp');
const fs = require('fs')

const banner = `/**
 * generated automatically / don't change manually!
 */
`

const checkFile = (baseDir, fp) => {
  parts = [`${fp}`, `${fp}/index`]
  for (const part of parts) {
    const fpath = `${baseDir}/pages/${part}.mdx`;
    if (fs.existsSync(fpath)){
      return true;
    }
  }
  return false;
}

const setEnabled = (baseDir, items, path = []) => {
  let hasActiveItems = false;
  let hrefs = [];

  let i = 0;
  for (const item of items) {
    item.path = [...path, i]
    let hasActiveChild = false;
    let fileExists = false;

    if (item.items) {
      const childData = setEnabled(baseDir, item.items, item.path);
      if (childData.hasActiveItems) {
        hasActiveChild = true;
      }
      if (item.path.length >= 2) {
        item.hrefs = [...childData.hrefs]
      }
    }

    if (item.href) {
      hrefs.push(item.href)
      fileExists = checkFile(baseDir, item.href)
    }

    if (fileExists || hasActiveChild) {
      Object.assign(item, { enabled: true });
      hasActiveItems = true;
    }
    i++;
    item.path = item.path.join('-');
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
    fs.writeFileSync(joinPath(this.basePath, this.dst), encoded)
  }

  read() {
    return yaml.load(fs.readFileSync(joinPath(this.basePath, this.src)));
  }
}


module.exports = TOCGenerator;
