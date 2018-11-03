#!/usr/bin/env node
'use strict';

const TOCBuilder = require('../lib/table_of_contents')
const cwd = process.cwd();

function generateDocsTOC() {
  const tocBuilder = new TOCBuilder(cwd, 'pages/docs/docs.yml', `constants/docs.js`);
  console.log(`cwd "${cwd}"`)
  console.log('generating docs TOC...')
  tocBuilder.convert()

}


require('yargs')
  .usage('$0 <cmd> [args]')
  .command('docs', 'Generate docs table of content', (yargs) => {
    // yargs.positional('name', {
    //   type: 'string',
    //   default: 'Cambi',
    //   describe: 'the name to say hello to'
    // })
  }, function (argv) {
    generateDocsTOC();
  })
  .help()
  .argv




module.exports = {
  generateDocsTOC
} 
