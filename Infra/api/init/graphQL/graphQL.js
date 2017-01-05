const { maskErrors } = require('graphql-errors')
const validateSchema = require('./validateSchema')

module.exports = function initGraphQL () {
  return validateSchema().then((schema) => {
    maskErrors(schema)
    return schema
  }).catch((reason) => {
    console.log(`Could not create graphQL`, reason)
    throw reason
  })
}
