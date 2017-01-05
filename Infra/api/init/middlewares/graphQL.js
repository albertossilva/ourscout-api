const { graphqlExpress } = require('graphql-server-express')
const Siguex = require('siguex')

module.exports = function createGraphQLMiddleware (schema) {
  return graphqlExpress(request => ({
    schema,
    context: {
      siguex: new Siguex(request.session.sigueToken, {
        setToken: token => { request.session.sigueToken = token },
        clearToken: () => { delete request.session }
      })
    }
  }))
}
