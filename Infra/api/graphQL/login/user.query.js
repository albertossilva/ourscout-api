const { GraphQLString, GraphQLList } = require('graphql')

module.exports = {
  type: GraphQLString,
  args: {},
  resolve: (_, __, { siguex }) => `${new Date().toString()} - ${siguex.token || 'LOGGEDOFF'}`
}
