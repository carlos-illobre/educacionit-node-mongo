
const { Router } = require('express')

module.exports = Router().get('/rest/v1/alumnos/cantidad', (req, res) => {
  res.end(22)
})