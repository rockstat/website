const next = require('next')
const routes = require('./routes')
const connect = require('connect')
const serveStatic = require('serve-static')
const nextapp = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(nextapp)
const fs = require('fs');
const summary = require('./content/summary.json');

const app = connect()
console.log('starting http server')

nextapp.prepare().then(() => {
  app
    .use(serveStatic('content'))
    .use(handler).listen(3000);
});
