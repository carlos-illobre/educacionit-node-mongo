const { Schema } = require('mongoose')
const { ObjectId } = Schema.Types

const alumnoSchema = Schema({
  nombre: String,
  apellido: String,
  presente: Boolean,
  fecha: Date,
  cursos: [{
    type: ObjectId,
    ref: 'Curso'
  }],
})

alumnoSchema.methods.saludar = function() {
  return `Hola soy ${this.nombre} ${this.apellido}`
}

module.exports = alumnoSchema