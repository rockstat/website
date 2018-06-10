const routes = module.exports = require('next-routes')()

routes
    .add('docs', '/:lang(en|ru)/docs/:slug', 'docs')
    .add('docsIndex', '/:lang(en|ru)/docs', 'docs')
    .add('main', '/:lang(en|ru)', 'main')
    .add('index', '/', 'index')
