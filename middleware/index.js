'use strict'

const { validateAuthToken } = require('./validate-token')
const { validatePayload } = require('./validate-payload')

module.exports = {
  validateAuthToken,
  validatePayload
}
