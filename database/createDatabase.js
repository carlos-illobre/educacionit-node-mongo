const mongoose = require('mongoose')
const glob = require('glob')
const { basename, extname } = require('path')

const url = 'mongodb://ds231739.mlab.com:31739/educacionit'

module.exports = () => new Promise((resolve, reject) => {

  mongoose.connect(url, {
    user: 'educacionit',
    pass: 'educacionit',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const db = glob.sync('./schemas/**/*.js', { cwd: __dirname })
    .map(filename => ({
      name: basename(filename).replace(extname(filename), ''),
      schema: require(filename),
    }))
    .filter(({ name, schema }) => schema instanceof mongoose.Schema)
    .map(({name, schema}) => mongoose.model(name, schema))
    .reduce((db, model) => ({
      ...db,
      [model.modelName]: model,
    }), {})

  mongoose.connection
    .on('error', error => reject(error))
    .once('open', () => resolve(db))

})

