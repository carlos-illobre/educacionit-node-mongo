const http = require('https')

module.exports = ({ texto1, texto2 }) => http.createServer((req, res) => {
  switch(req.url) {
    case '/users': {
      res.writeHead(200, {
        "content-type": "text/html"
      })
      res.end(texto1)
      break
    }
    case '/alumnos': {
      res.writeHead(200, {
        "content-type": "text/html"
      })
      res.end(texto2)
      break
    }
    default: {
      res.end(req.url)
      break
    }  
  }
})
