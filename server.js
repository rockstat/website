const { parse: urlParse } = require('url')
const micro = require('micro')
const redirect = require('micro-redirect')
const next = require('next')
const nextRoutes = require('./next-routes')


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = nextRoutes.getRequestHandler(app)

const port = process.env.PORT || 4444;

app.prepare()
  .then(() => {
    console.log('nextjs creating server')
    const server = micro((req, res) => {

      const { pathname, query } = urlParse(req.url, true)

      if (pathname === '/') {
        redirect(res, 303, '/ru')
        return;
      }
      handler(req, res);
    })

    server.listen(port, (err) => {
      if (err) {
        throw err
      }

      console.log(`> Ready on http://localhost:${port}`)
    })
  })
