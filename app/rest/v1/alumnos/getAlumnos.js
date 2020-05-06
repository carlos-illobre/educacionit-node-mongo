const { Router } = require('express')

module.exports = Router().get('/rest/v1/alumnos', (req, res) => {
  res.end('ALUMNOS')
})