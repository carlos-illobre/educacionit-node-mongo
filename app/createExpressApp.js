const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const rootRouter = require('./rest/createApiRouter')()

module.exports = ({ db }) => express()
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .options('*', cors())
  .use(express.static('./public'))
  .use((req, res, next) => {
    req.db = db
    next()
  })
  .use(rootRouter)
  .use((error, req, res, next) => {
    consoel.error(error)
    res.status(error.status || 500).json({ error })
  })

