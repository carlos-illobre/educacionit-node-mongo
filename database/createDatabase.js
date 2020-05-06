const mongoose = require('mongoose')

const url = 'mongodb://ds231739.mlab.com:31739/educacionit'

module.exports = () => {

  mongoose.connect(url, {
    user: 'educacionit',
    pass: 'educacionit',
  })

  const db = {}

  mongoose.connection
    .on('error', error => {
      throw error
    })
    .once('open', () => console.log(`MongoDB connected at ${url}`))

  return db
}

