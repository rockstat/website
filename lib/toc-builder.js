const globby = require('globby');
const { promisify } = require('bluebird')
const { readFile, writeFile } = require('fs');
const { basename, dirname } = require('path');
const { render } = require('./md-render');

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);



/**
 *
 * DEPRECATED!!!! БУДЕТ MDX !!!!
 *
 *
 */



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

      const raw = await readFileAsync(f);
      const content = render(raw);

      const fn = basename(f, '.md');
      const out = `${dirname(f)}/${fn}.json`;
      const fm = Object.assign({ file: f, out: out, title: fn }, content.attributes)
      data.push(fm);

      await this.writeDoc(out, doc)
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

