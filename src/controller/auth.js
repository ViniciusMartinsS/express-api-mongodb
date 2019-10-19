'use strict'

const { find } = require('../model').users

module.exports.login = async ({ body }) => {
  const { email, password } = body

  if (!email || !password) {
    throw new Error('Missing payload to log in!')
  }

  const user = await find(email, password)

  if (!user || !user.length) {
    throw new Error('Unauthorized')
  }

  return user
}
