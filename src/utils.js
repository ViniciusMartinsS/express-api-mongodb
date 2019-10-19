'use strict'

module.exports.formatResponse = result => ({
  status: true,
  response: {
    rows: result.length,
    result
  }
})

module.exports.formatErr = err => ({
  status: false,
  message: err && err.message || err
})
