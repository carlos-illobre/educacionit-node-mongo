const { Router } = require('express')

module.exports = Router().get('/rest/v1/alumnos/:id/cursos', (req, res) => {
  res.end(`cursos del alumno ${req.params.id}`)
})