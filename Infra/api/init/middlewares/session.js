const session = require('express-session')
const RedisStore = require('connect-redis')(session)

const configuration = require('Infra/config/redis')

module.exports = function createSessionMiddleware ({ sessionSecret }) {
  return session({
    store: new RedisStore({
      host: configuration.host,
      port: configuration.port,
      pass: configuration.pass
    }),
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
    unset: 'destroy'
  })
}
