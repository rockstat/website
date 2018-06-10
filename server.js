const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const routes = require('./routes')
const pathMatch = require('path-match')
const connect = require('connect')
const serveStatic = require('serve-static')
const nextapp = next({ dev: process.env.NODE_ENV !== 'production' })
// const handler = routes.getRequestHandler(nextapp)
const handle = nextapp.getRequestHandler()
const fs = require('fs');
const summary = require('./content/summary.json');
const route = pathMatch()
const match = route('/docs/:slug')


// const app = connect()
console.log('starting http server')
const static = serveStatic('content');
const port = process.env.PORT || 3000;

nextapp.prepare()
  .then(() => {
    createServer((req, res) => {
      const { pathname, query } = parse(req.url, true)
      console.log({ pathname, query })


      if (routes[pathname]) {
        console.log('if(routes[pathname]){')
        app.render(req, res, pathname, routes[pathname])
        return;
      }
      // const params = match(pathname)

      // if (params === false) {
        handle(req, res)
        return
      // }
      // assigning `query` into the params means that we still
      // get the query string passed to our application
      // i.e. /blog/foo?show-comments=true
      // app.render(req, res, '/docs', Object.assign(params, query))
    })
      .listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
      })
  })

// nextapp.prepare().then(() => {
//   app
//     .use()
//     .use(handler).listen(3000);
// });
