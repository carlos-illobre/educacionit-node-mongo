const { Schema } = require('mongoose')

const userSchema = Schema({
  username: String,
  password: String,
})

module.exports = userSchema