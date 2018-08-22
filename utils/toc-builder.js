const frontMatter = require('front-matter');
const marked = require('marked');
const globby = require('globby');
const { promisify } = require('bluebird')
const { readFile, writeFile } = require('fs');
const { basename, dirname } = require('path');

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);
const mdOptions = {};


marked.setOptions({
  renderer: new marked.Renderer(),
  // highlight: function(code) {
  // return require('highlight.js').highlightAuto(code).value;
  // },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});


module.exports.TableOfContentsBuilder = class TableOfContentsBuilder {

  constructor(options = {}) {
    this.options = Object.assign({
      // pattern: '',
      out: 'toc.js'
    }, options);
  }

  async listFiles(pattern) {
    return await globby(pattern);
  }

  async handle() {
    if (!this.options.pattern) {
      return
    }
    const data = [];
    const files = await this.listFiles(this.options.pattern);
    for (const f of files) {
      const bn = basename(f, '.md');
      const outf = `${dirname(f)}/${bn}.json`;
      console.log(f, outf);
      const rawf = await readFileAsync(f);
      const content = await frontMatter(String(rawf));
      const fm = Object.assign({ file: f, out: outf, title: bn }, content.attributes)
      data.push(fm);
      const doc = marked(content.body);
      await this.writeDoc(outf, doc)
    }
    await this.saveTOC(data)
  }

  async saveTOC(data) {
    const raw = `module.exports.data = ${JSON.stringify(data)};\n`;
    await writeFileAsync(this.options.out, raw)
  }

  async writeDoc(fn, data) {
    const raw = JSON.stringify({ data });
    await writeFileAsync(fn, raw);
  }
}

