const express = require('express');

module.exports = express.Router({mergeParams: true})
.get('/v1/alumnos', async (req, res, next) => {
    try {
        const alumnos = await req.db.Alumno.find()
    debugger
        res.send(alumnos)
    } catch (error) {
        next(error)
    }
})
