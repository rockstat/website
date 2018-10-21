const micro = require('micro')
const next = require('next')
const nextRoutes = require('./next-routes')

const port = process.env.PORT || 10080;
const host = process.env.HOST || '127.0.0.1';
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = nextRoutes.getRequestHandler(app)

app.prepare()
  .then(() => {
    const server = micro((req, res) => {
      handler(req, res);
    })
    server.listen(port, host, (err) => {
      if (err) throw err
      console.log(`> Ready on http://${host}:${port}`)
    })
  })
