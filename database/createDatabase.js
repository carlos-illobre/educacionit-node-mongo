const mongoose = require('mongoose')
const glob = require('glob')
const { basename, extname } = require('path')

const { MONGO_URL, MONGO_USER, MONGO_PASSWORD } = process.env

module.exports = () => new Promise((resolve, reject) => {

  mongoose.connect(MONGO_URL, {
    user: MONGO_USER,
    pass: MONGO_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const db = {}

  glob.sync('./schemas/**/*.js', { cwd: __dirname })
    .map(filename => ({
      name: basename(filename).replace(extname(filename), ''),
      schema: require(filename),
    }))
    .filter(({ name, schema }) => schema instanceof mongoose.Schema)
    .map(({name, schema}) => {
      schema.db = db
      return mongoose.model(name, schema)
    })
    .reduce((db, model) => {
      db[model.modelName] = model
      return db
    }, db)

  mongoose.connection
    .on('error', error => reject(error))
    .once('open', () => resolve(db))

})

