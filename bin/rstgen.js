#!/usr/bin/env node
'use strict';

const { TOCGenerator } = require('../lib/table_of_contents')
const cwd = process.cwd();

function getTOCGenerator() {
  console.log(`docTOCGen: cwd "${cwd}"`)
  return new TOCGenerator(cwd, 'pages/docs/docs.yml', `constants/docs.js`);
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
    getTOCGenerator().convert();
  })
  .help()
  .argv



module.exports = {
  getTOCGenerator
} 
