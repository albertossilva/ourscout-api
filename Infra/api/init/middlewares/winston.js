const expressWinston = require('express-winston')
const winston = require('winston')

const logOptions = {
  colorize: true
}

const winstonMiddleware = {
  requestLogMiddleware: expressWinston.logger({
    transports: [ new winston.transports.Console(logOptions) ],
    expressFormat: true,
    colorize: true
  }),

  errorLogMiddleware: expressWinston.errorLogger({
    transports: [ new winston.transports.Console(logOptions) ],
    colorize: true
  })
}

module.exports = winstonMiddleware
