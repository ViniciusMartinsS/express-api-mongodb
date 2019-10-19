'use strict'

const jwt = require('jsonwebtoken')
const JWT_KEY = process.env.JWT_KEY

module.exports.formatResponse = (result, token) => ({
  status: true,
  ...(token && { token }),
  response: {
    rows: result.length,
    result
  }
})

module.exports.formatErr = err => ({
  status: false,
  message: err && err.message || err
})

module.exports.generateJWT = response =>
  jwt.sign(
    { id: response[0]._id, email: response[0].email },
    JWT_KEY,
    { expiresIn: '1h' }
  )
