const leerArchivo = require('./subcarpeta/leerArchivo')
const createServer = require('./subcarpeta/createServer')

Promise.all([
  leerArchivo('./server.js'),
  leerArchivo('./index.html'),
])
  .then(([ texto1, texto2 ]) => {
    const server = createServer({ texto1, texto2 })
    server.listen(8080, () => console.log('server ready'))
  })
  .catch(error => {
    console.error(error)
  })
  .finally(() => {
    console.log('se leyo el archivo')  
  })
