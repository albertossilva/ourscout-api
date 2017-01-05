const localApi = {
  host: 'localhost',
  port: 6379
}

const remoteApi = {
  host: process.env.REDIS_URL,
  port: parseInt(process.env.REDIS_PORT, 10),
  pass: process.env.REDIS_PASSWORD
}

const redis = {
  development: localApi,
  test: localApi,
  qa: remoteApi,
  production: remoteApi
}

module.exports = redis[require('./environment')]
