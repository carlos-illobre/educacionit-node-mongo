const express = require('express');

module.exports = express.Router({mergeParams: true})
.put('/v1/alumnos/:id/nombre', async (req, res, next) => {
    try {
        const alumno = await req.db.Alumno.findById(req.params.id)
        alumno.nombre = req.body.nombre
        await alumno.save()
        res.sendStatus(204)
    } catch(error) {
        next(error)
    }
})
