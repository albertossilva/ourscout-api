const session = require('express-session')
const RedisStore = require('connect-redis')(session)

module.exports = function createSessionMiddleware ({ sessionSecret }) {
  return session({
    store: new RedisStore({
      host: 'redis-10810.c11.us-east-1-2.ec2.cloud.redislabs.com',
      port: 10810,
      pass: 'q1w2e3r4t5'
    }),
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
    unset: 'destroy'
  })
}
