const fs = require('fs')

module.exports = filename => new Promise((resolve, reject) => {
  fs.readFile(filename, (error, text) => {
    if (error) {
      reject(error)
    }
    resolve(text.toString())
  })
})

