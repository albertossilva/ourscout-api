const { GraphQLObjectType, GraphQLSchema } = require('graphql')

const login = require('./login')

const queries = Object.assign(
  {},
  login.queries
)

const mutations = Object.assign(
  {},
  login.mutations
)

const root = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => queries
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => mutations
  })
})

module.exports = { root }
