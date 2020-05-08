const PORT = 8080

const http = require('http')
const createExpressApp = require('./app/createExpressApp')
require('./database/createDatabase')()
  .then(db => {
    const app = createExpressApp({ db })
    const server = http.createServer(app)
    server.listen(PORT, () => console.log(`server ready listening on port ${PORT}`))
    //  console.log(`MongoDB connected at ${url}`)
  })



