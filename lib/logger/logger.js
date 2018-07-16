const bunyan = require('bunyan')
module.exports = (function () {
  const logger = bunyan.createLogger({name: 'clicksign'})
  if (!process.env.CLICKSIGN_DEBUG) {
    logger.level(bunyan.FATAL + 1)
  }

  return logger
})()
