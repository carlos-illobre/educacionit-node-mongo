
const { Router } = require('express')

module.exports = Router().get('/rest/v1/alumnos/cantidad', async (req, res) => {
  await db.Alumno.saludar()
  res.end(22)
})