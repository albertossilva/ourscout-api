const user = require('./user.query')
const authenticate = require('./authenticate.mutation')
const logoff = require('./logoff.mutation')

module.exports = {
  queries: { user },
  mutations: { authenticate, logoff }
}
