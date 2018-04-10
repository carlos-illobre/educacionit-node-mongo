const mongoose = require('mongoose')
const glob = require('glob')
const path = require('path')

//const url = 'mongodb://ds231739.mlab.com:31739/educacionit'
const url = 'mongodb://mongo:27017/educacionit'


module.exports = ({ logger }) => {

    mongoose.connect(url)/*, {
        user: 'educacionit',
        pass: 'educacionit',
    })*/

    const db = glob.sync('./schemas/**/*.js', { cwd: __dirname })
    .map(filename => {
        return {
            name: path.basename(filename).replace(path.extname(filename), ''),
            schema: require(filename),
        }
    })
    .map(({name, schema}) => mongoose.model(name, schema))
    .reduce((db, model) => {
        db[model.modelName] = model
        return db
    }, {})

    mongoose.connection
    .on('error', error => {
        throw error
    })
    .once('open', () => logger.info(`MongoDB connected at ${url}`))

    return db
}
