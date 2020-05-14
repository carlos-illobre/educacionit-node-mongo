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

alumnoSchema.statics.saludar = async function() {
  const users = await alumnoSchema.db.User.find()
  console.log(users)
  return `Hola soy ${this.nombre} ${this.apellido}`
}

module.exports = alumnoSchema