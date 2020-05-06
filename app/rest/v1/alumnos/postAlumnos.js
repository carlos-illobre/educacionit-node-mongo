const { Router } = require('express')

module.exports = Router().post('/rest/v1/alumnos', (req, res) => {
  const alumnoId = req.params.id
  res.end(alumnoId)
})