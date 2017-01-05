const { GraphQLBoolean } = require('graphql')

module.exports = {
  type: GraphQLBoolean,
  resolve: (_, __, { siguex }) => {
    siguex.clearToken()

    return true
  }
}
