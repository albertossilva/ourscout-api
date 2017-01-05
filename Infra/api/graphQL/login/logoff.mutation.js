const { GraphQLBoolean } = require('graphql')

module.exports = {
  type: GraphQLBoolean,
  description: 'Remove access to SIGUE information',
  resolve: (_, __, { siguex }) => {
    siguex.clearToken()

    return true
  }
}
