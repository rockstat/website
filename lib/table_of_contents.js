const yaml = require('js-yaml');
const { join: joinPath } = require('path');
const fs = require('fs');
const cwd = process.cwd();

const banner = `/**
 * generated automatically / don't change manually!
 */
`
module.exports.getTOCGenerator = () => {
  console.log(`docTOCGen: cwd "${cwd}"`)
  return new TOCGenerator(cwd, 'pages/docs/docs.yml', `./lib/constants/docs.js`);
}

const checkFile = (baseDir, fp) => {
  for (const part of [fp, `${fp}/index`]) {
    for (const ext of ['mdx', 'js']){
      const fpath = `${baseDir}/pages/${part}.${ext}`;
      if (fs.existsSync(fpath)) {
        let stats = fs.statSync(fpath)
        let lastMod = new Date(stats.mtime).toISOString().substr(0,10);
        return { lastMod };
      }
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
      Object.assign(item, { enabled: true, modified: fileExists.lastMod });
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

  sitemapNode(node) {
    for (let i of node) {
      try {
        if (i.enabled && i.enabled == true && i.href) {
          const end = i.href.endsWith('/') ? '' : '/';
          this.xml += '<url>\n'
          this.xml += `<loc>https://rock.st${i.href}${end}</loc>\n`
          this.xml += `<lastmod>${i.modified}</lastmod>\n`
          // this.xml += `<changefreq>always</changefreq>\n`
          // this.xml += `<priority>0.5</priority>\n`
          this.xml += '</url>\n'
        }
        if (i.items) {
          this.sitemapNode(i.items)
        }
      } catch (err) {
        console.error(err);
        console.warn(i)
      }
      
    }
  }

  sitemap(data) {
    this.xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    this.xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    this.sitemapNode(data)

    this.xml += '</urlset>\n'
    return this.xml;
  }

  convert() {
    console.log('generating docs TOC...')
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


module.exports.TOCGenerator = TOCGenerator;
