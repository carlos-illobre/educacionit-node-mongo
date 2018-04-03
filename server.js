const http = require('http')
const port = process.env.PORT || 8080

const logger = require('./logger.js')

const createDatabase = require('./database/createDatabase.js')
const createExpressApp = require('./app/createExpressApp.js')

const database = createDatabase({ logger })

const app = createExpressApp({
    logger,
    database,
})

return http
.createServer(app)
.listen(port)
.on('listening', function() {
    const addr = this.address()
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`
    logger.info(`Listening on ${bind}`)
})
.on('error', function(error) {
    if (error.syscall !== 'listen') throw error
    const addr = this.address() || { port }
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`
    switch (error.code) {
    case 'EACCES':
        logger.error(`${bind} requires elevated privileges`)
        process.exit(1)
        break
    case 'EADDRINUSE':
        logger.error(`${bind} is already in use`)
        process.exit(1)
        break
    default:
        throw error
    }
})
