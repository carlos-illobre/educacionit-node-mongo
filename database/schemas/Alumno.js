const mongoose = require('mongoose')

const alumnoSchema = mongoose.Schema({
    nombre: String,
    apellido: String,
})

alumnoSchema.methods.saludar = function () {
    return `Hola soy ${this.nombre} ${this.apellido}`
}

module.exports = alumnoSchema
