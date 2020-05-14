require('dotenv').config()

const { API_PORT: PORT } = process.env

const http = require('http')
const socketio = require('socket.io')
debugger
const createExpressApp = require('./app/createExpressApp')
require('./database/createDatabase')()
  .then(db => {
    const app = createExpressApp({ db })
    const server = http.createServer(app)
    server.listen(PORT, () => console.log(`server ready listening on port ${PORT}`))
    //  console.log(`MongoDB connected at ${url}`)

    const io = socketio(server)

    io.on('connection', socket => {
      console.log('a user connected')
      socket.on('chat message', message => {
        debugger
        io.emit('chat message', message)
      })
      socket.on('disconnect', () => {
        console.log('user disconnected')
      })
    })
  })

