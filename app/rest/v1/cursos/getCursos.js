const { Router } = require('express')

module.exports = Router().get('/rest/v1/cursos', (req, res) => {
  const { nombre, apellido } = req.query
  res.end(`CURSOS ${nombre} ${apellido}`)
})