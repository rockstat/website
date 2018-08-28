const routes = require('next-routes')


// routes.add([name], pattern = /name, page = name)
module.exports = routes()
  .add('index', '/', 'index')
  .add('main', '/ru', 'main')
  .add('docs', '/docs', 'docs')
  // .add('blog', '/:lang(en|ru)/blog/:slug')

