const routes = require('next-routes')


// routes.add([name], pattern = /name, page = name)
module.exports = routes()
  .add('index', '/')
  .add('main', '/:lang(en|ru)')
  // .add('docs', '/:lang(en|ru)/docs/:slug?')
  .add('blog', '/:lang(en|ru)/blog/:slug')
