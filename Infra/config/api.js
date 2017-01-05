const localApi = {
  port: 3001,
  graphiql: true,
  corsOrigin: '*',
  sessionSecret: 'ourscout-dev'
}

const remoteApi = {
  port: parseInt(process.env.PORT, 10),
  graphiql: process.env.GRAPHIQL === 'active',
  corsOrigin: process.env.FRONT_DOMAIN,
  sessionSecret: process.env.SESSION_SECRET
}

const api = {
  development: localApi,
  test: localApi,
  qa: remoteApi,
  production: remoteApi
}

const environment = require('./environment')

module.exports = Object.assign(api[environment], { environment })
