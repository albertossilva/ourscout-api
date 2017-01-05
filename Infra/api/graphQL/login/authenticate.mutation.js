const { GraphQLString } = require('graphql')

module.exports = {
  type: GraphQLString,
  description: 'Authenticated user on SIGUE, and enable access to sigue information',
  args: {
    username: {
      type: GraphQLString,
      description: 'The same user of SIGUE'
    },
    password: {
      type: GraphQLString,
      description: 'The same password of SIGUE'
    },
  },
  resolve: (_, { username, password }, { siguex }) => {
    return siguex
      .login(username, password)
      .then(({ success, token } = {}) => {
        if (success) {
          siguex.setToken(token)
          return 'OK'
        }

        siguex.clearToken()

        return 'INVALID_USER_PASSWORD'
      })
  }
}
