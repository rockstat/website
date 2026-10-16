/**
 * webpack/Turbopack loader for data/docs.yml: parses the menu and enriches it
 * (page existence, modification dates, ids) so the client never needs `fs`.
 */
const path = require('path');
const { loadMenu } = require('../docs-menu');

module.exports = function docsMenuLoader(source) {
  const rootDir = this.rootContext || process.cwd();
  // re-run when docs pages are added/removed
  if (this.addContextDependency) this.addContextDependency(path.join(rootDir, 'pages', 'docs'));
  const data = loadMenu({ source: String(source), rootDir });
  return `export default ${JSON.stringify(data)};`;
};
