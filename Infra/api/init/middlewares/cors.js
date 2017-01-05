const cors = require('cors')

module.exports = function createCORSMiddleware ({ corsOrigin }) {
  return cors({
    origin: corsOrigin
  })
}
