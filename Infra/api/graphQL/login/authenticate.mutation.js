const { GraphQLString } = require('graphql')

module.exports = {
  type: GraphQLString,
  args: {
    username: {
      type: GraphQLString,
      name: 'Sigue username'
    },
    password: {
      type: GraphQLString,
      name: 'Sigue password'
    },
  },
  resolve: (_, { username, password }, { siguex }) => {
    return siguex
      .login(username, password)
      .then(({ success, token }) => {
        if (success) {
          siguex.setToken(token)
          return 'OK'
        }

        siguex.clearToken()

        return 'INVALID_USER_PASSWORD'
      })
  }
}
