const bodyParser = require('body-parser')

const bodyMiddleware = {
  json: bodyParser.json()
}

module.exports = bodyMiddleware
