const http = require('http')

const db = require('./app/createDatabase')()
const app = require('./app/createExpressApp')({})

const server = http.createServer(app)

server.listen(8080, () => console.log('server ready'))
