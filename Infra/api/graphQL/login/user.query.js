const { GraphQLString, GraphQLList } = require('graphql')

module.exports = {
  type: GraphQLString,
  description: 'Gets the authenticated user',
  args: {},
  resolve: (_, __, { siguex }) => `${new Date().toString()} - ${siguex.token || 'LOGGEDOFF'}`
}
