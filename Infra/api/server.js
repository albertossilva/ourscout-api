const express = require('express')

const configuration = require('Infra/config/api')

const initGraphQL = require('./init/graphQL')
const {
  requestLogMiddleware,
  errorLogMiddleware
} = require('./init/middlewares/winston')

const bodyMiddleware = require('./init/middlewares/body')
const corsMiddleware = require('./init/middlewares/cors')
const graphQLMiddleware = require('./init/middlewares/graphQL')
const graphiQLMiddleware = require('./init/middlewares/graphiQL')
const sessionMiddleware = require('./init/middlewares/session')

const configureExpress = (schema) => {
  const ourScoutApi = express()
  const graphQLEndpoint = '/graphql'

  ourScoutApi.use(corsMiddleware(configuration))
  ourScoutApi.use(sessionMiddleware(configuration))

  ourScoutApi.use(graphQLEndpoint, bodyMiddleware.json, graphQLMiddleware(schema))
  configuration.graphiql && ourScoutApi.use('/graphiql', graphiQLMiddleware(graphQLEndpoint))

  ourScoutApi.use(requestLogMiddleware)
  ourScoutApi.use(errorLogMiddleware)

  return ourScoutApi
}

const startServer = (server) =>
  server.listen(configuration.port, () => console.log(`OurScout Api is running on port ${configuration.port}`))

initGraphQL()
  .then(configureExpress)
  .then(startServer)
