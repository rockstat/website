const fs = require('fs-extra');
const visit = require('unist-util-visit');
const utils = require('./utils');
const path = require('path')

const render = utils.render;
const renderFromFile = utils.renderFromFile;
const getDestinationDir = utils.getDestinationDir;
const createMermaidDiv = utils.createMermaidDiv;

const PLUGIN_NAME = 'remark-mermaid';

/**
 * Is this title `mermaid:`?
 *
 * @param  {string} title
 * @return {boolean}
 */
const isMermaid = title => title === 'mermaid:';

/**
 * Given a node which contains a `url` property (eg. Link or Image), follow
 * the link, generate a graph and then replace the link with the link to the
 * generated graph. Checks to ensure node has a title of `mermaid:` before doing.
 *
 * @param   {object}  node
 * @param   {vFile}   vFile
 * @return {object}
 */
function replaceUrlWithGraph(node, vFile, destinationDir, pubDir) {
  const { title, url, position } = node;

  // If the node isn't mermaid, ignore it.
  if (!isMermaid(title)) {
    return node;
  }
  console.log('replaceUrlWithGraph called -> is!')

  try {
    // eslint-disable-next-line no-param-reassign
    node.url = renderFromFile(`${vFile.dirname}/${url}`, destinationDir);

    vFile.info('mermaid link replaced with link to graph', position, PLUGIN_NAME);
  } catch (error) {
    vFile.message(error, position, PLUGIN_NAME);
  }

  return node;
}

/**
 * Given a link to a mermaid diagram, grab the contents from the link and put it
 * into a div that Mermaid JS can act upon.
 *
 * @param  {object}   node
 * @param  {integer}  index
 * @param  {object}   parent
 * @param  {vFile}    vFile
 * @return {object}
 */
function replaceLinkWithEmbedded(node, index, parent, vFile) {
  const { title, url, position } = node;
  let newNode;

  // If the node isn't mermaid, ignore it.
  if (!isMermaid(title)) {
    return node;
  }
  console.log('replaceLinkWithEmbedded called - is!')

  try {
    const value = fs.readFileSync(`${vFile.dirname}/${url}`, { encoding: 'utf-8' });

    newNode = createMermaidDiv(value);
    parent.children.splice(index, 1, newNode);
    vFile.info('mermaid link replaced with div', position, PLUGIN_NAME);
  } catch (error) {
    vFile.message(error, position, PLUGIN_NAME);
    return node;
  }

  return node;
}

/**
 * Given the MDAST ast, look for all fenced codeblocks that have a language of
 * `mermaid` and pass that to mermaid.cli to render the image. Replaces the
 * codeblocks with an image of the rendered graph.
 *
 * @param {object}  ast
 * @param {vFile}   vFile
 * @param {boolean} isSimple
 * @return {function}
 */
function visitCodeBlock(ast, vFile, isSimple, destinationDir, pubDir) {
  return visit(ast, 'code', (node, index, parent) => {
    const { lang, value, position } = node;
    const destinationDir = getDestinationDir(vFile);
    const pubDir = vFile.data.pubDir;
    let newNode;

    // If this codeblock is not mermaid, bail.
    if (lang !== 'mermaid') {
      return node;
    }
    console.log('visitCodeBlock called - is!');
    // Are we just transforming to a <div>, or replacing with an image?
    if (isSimple) {
      newNode = createMermaidDiv(value);

      vFile.info(`${lang} code block replaced with div`, position, PLUGIN_NAME);

      // Otherwise, let's try and generate a graph!
    } else {
      let graphSvgFilename;
      try {
        graphSvgFilename =render(value, destinationDir);

        vFile.info(`${lang} code block replaced with graph`, position, PLUGIN_NAME);
      } catch (error) {
        vFile.message(error, position, PLUGIN_NAME);
        return node;
      }

      newNode = {
        type: "paragraph",
        children: [
          {
            type: 'image',
            title: '`mermaid` image',
            url:  `/${pubDir}/` + graphSvgFilename,
          }
        ]
      }
    }

    parent.children.splice(index, 1, newNode);

    return node;
  });
}

/**
 * If links have a title attribute called `mermaid:`, follow the link and
 * depending on `isSimple`, either generate and link to the graph, or simply
 * wrap the graph contents in a div.
 *
 * @param {object}  ast
 * @param {vFile}   vFile
 * @param {boolean} isSimple
 * @return {function}
 */
function visitLink(ast, vFile, isSimple, destinationDir, pubDir) {
  if (isSimple) {
    return visit(ast, 'link', (node, index, parent) => replaceLinkWithEmbedded(node, index, parent, vFile, destinationDir, pubDir));
  }

  return visit(ast, 'link', node => replaceUrlWithGraph(node, vFile));
}

/**
 * If images have a title attribute called `mermaid:`, follow the link and
 * depending on `isSimple`, either generate and link to the graph, or simply
 * wrap the graph contents in a div.
 *
 * @param {object}  ast
 * @param {vFile}   vFile
 * @param {boolean} isSimple
 * @return {function}
 */
function visitImage(ast, vFile, isSimple, destinationDir, pubDir) {
  if (isSimple) {
    return visit(ast, 'image', (node, index, parent) => replaceLinkWithEmbedded(node, index, parent, vFile, destinationDir, pubDir));
  }

  return visit(ast, 'image', node => replaceUrlWithGraph(node, vFile, destinationDir, pubDir));
}

/**
 * Returns the transformer which acts on the MDAST tree and given VFile.
 *
 * If `options.simple` is passed as a truthy value, the plugin will convert
 * to `<div class="mermaid">` rather than a SVG image.
 *
 * @link https://github.com/unifiedjs/unified#function-transformernode-file-next
 * @link https://github.com/syntax-tree/mdast
 * @link https://github.com/vfile/vfile
 *
 * @param {object} options
 * @return {function}
 */
function mermaid(options = {}) {
  const simpleMode = options.simple || false;
  const destinationDir = options.destinationDir || './';
  const pubDir = options.pubDir || './';
  
  /**
   * @param {object} ast MDAST
   * @param {vFile} vFile
   * @param {function} next
   * @return {object}
   */
  return function transformer(ast, vFile, next) {
    vFile.data.destinationDir = vFile.data.destinationDir || destinationDir;

    visitCodeBlock(ast, vFile, simpleMode, destinationDir, pubDir);
    visitLink(ast, vFile, simpleMode, destinationDir, pubDir);
    visitImage(ast, vFile, simpleMode, destinationDir, pubDir);

    if (typeof next === 'function') {
      return next(null, ast, vFile);
    }

    return ast;
  };
}

module.exports = mermaid;
