const {URL} = require('url')
const error = require('../errorHandler')
const AppError = require('../errorHandler/appError')
const axios = require('axios')

class Clicksign {
  constructor (apiKey, environment, baseApiPath = '/api/v1') {
    this.configurations = {apiKey}

    try {
      this.configurations.url = new URL(`${environment}${baseApiPath}`)
    } catch (e) {
      error.handleError(e)
      throw new AppError('Environment is not a Valid URL', null, 'Please set environment variables acording to .env.sample in your root directory', false)
    }
  }

  createDocument (document) {
    return axios.post(this._makeURL('/documents'), document, this.configurations.requestConfig)
  }

  _makeURL (path) {
    return `${this.configurations.url}${path}?access_token=${this.configurations.apiKey}`
  }
}

module.exports = Clicksign
