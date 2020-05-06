const { Router } = require('express')

module.exports = Router().get('/rest/v1/cursos/cantidad', (req, res) => {
  res.end('43')
})