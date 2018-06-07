const routes = module.exports = require('next-routes')()

routes
.add('dockMain', '/:lang(en|ru)/documentation', 'documentation')
.add('dockChildren', '/:lang(en|ru)/documentation/:slug', 'documentation')
.add('index',  '/:lang(en|ru)', 'index')
.add('main',  '/', 'main')
