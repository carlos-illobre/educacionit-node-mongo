const express = require('express')

const rootRouter = require('./rest/createApiRouter')()

module.exports = () => express()
  .use(express.static('./public'))
  .use(rootRouter)

