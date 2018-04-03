const express = require('express');

module.exports = express.Router({mergeParams: true})
.post('/v1/alumnos', async (req, res, next) => {
    try {
        const alumno = new req.db.Alumno({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
        })
        await alumno.save()
        const location = `${req.base}${req.originalUrl}/${alumno.id}`
        res.setHeader('Location', location)
        res.status(201).send(alumno)
    } catch(error) {
        next(error)
    }
})
