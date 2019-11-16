'use strict'

const Joi = require('@hapi/joi')

module.exports = ({
  GET: Joi.object().keys({
    brand: Joi.string()
      .optional()
      .description('the brand of a vehicle')
  })
    .optional()
})
