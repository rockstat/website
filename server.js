const micro = require('micro')
const next = require('next')
// const nextRoutes = require('./next-routes')

const port = process.env.PORT || 10080;
const host = process.env.HOST || '127.0.0.1';
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const { parse } = require('url')

// const handler = nextRoutes.getRequestHandler(app)
const handle = app.getRequestHandler()


app.prepare()
  .then(() => {
    const server = micro((req, res) => {
      const parsedUrl = parse(req.url, true)
      handle(req, res, parsedUrl)
    })
    server.listen(port, host, (err) => {
      if (err) throw err
      console.log(`> Ready on http://${host}:${port}`)
    })
  })
