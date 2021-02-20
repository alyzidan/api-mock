const JSONSERVER = require('json-server')
const server = JSONSERVER.create()
const router = JSONSERVER.router('DB.json')
const middlewares = JSONSERVER.defaults()
const port = process.env.port || 3333

server.use(middlewares)
server.use(router)
server.listen(port,() => console.log(
      'Lesting to app port 3333'
))