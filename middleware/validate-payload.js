'use strict'

const { schemaValidator } = require('../schema')

module.exports.validatePayload = (req, res, next) => {
  try {
    schemaValidator(req)
    next()
  } catch (err) {
    return res.status(401).send({
      status: false,
      message: 'Invalid payload'
    })
  }
}
