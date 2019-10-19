'use strict'

const jwt = require('jsonwebtoken')
const JWT_KEY = process.env.JWT_KEY

module.exports.validateAuthToken = (req, res, next) => {
  try {
    jwt.verify(req.headers.authorization, JWT_KEY)
    next()
  } catch (err) {
    return res.status(401).send({
      status: false,
      message: 'Invalid Authorization Token'
    })
  }
}
