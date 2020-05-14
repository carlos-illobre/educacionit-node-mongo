const { Router } = require('express')

module.exports = Router().get('/rest/v1/alumnos', (req, res) => {
  req.db.Alumno.saludar()
  res.end('ALUMNOS')
})