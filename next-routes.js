const routes = require('next-routes')


// routes.add([name], pattern = /name, page = name)
module.exports = routes()
  .add('to_main', '/')
  .add('main', '/:lang(en|ru)')
  .add('docs', '/docs')
  // .add('blog', '/:lang(en|ru)/blog/:slug')
