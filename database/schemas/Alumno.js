const { Schema } = require('mongoose')

const alumnoSchema = Schema({
  nombre: String,
  apellido: String,
  presente: Boolean,
  fecha: Date,
})

alumnoSchema.methods.saludar = function() {
  return `Hola soy ${this.nombre} ${this.apellido}`
}

module.exports = alumnoSchema