'use strict'

const Joi = require('@hapi/joi')
const regex = /^\/([a-z]+).+/i

module.exports.schemaValidator = req => {
  const { method, originalUrl } = req
  const params = { ...req.body, ...req.params, ...req.query }

  const entityToValidate = originalUrl.replace(regex, '$1')
  const schema = require(`./${entityToValidate}`)[method]

  const isValid = Joi.validate(params, schema, { abortEarly: false })

  if (isValid.error) {
    throw isValid.error
  }
}
