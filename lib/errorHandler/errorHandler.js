const logger = require('../logger')

function handleError (error) {
  return logger.error(error)
}

module.exports = {handleError}
