'use strict'

const { create, find, update, remove } = require('../model').vehicles

module.exports.create = async ({ body }) => {
  if (!body || !Object.keys(body).length) {
    throw new Error('Missing payload.')
  }

  return create(body)
}

module.exports.show = async ({ params, query }) => {
  const { id = null } = params
  const { brand = null } = query

  return find(id, brand)
}

module.exports.update = async ({ params, body }) => {
  const { id = null } = params

  if (!body || !Object.keys(body).length || !id) {
    throw new Error('Missing payload or/and where clause.')
  }

  return update(id, body)
}

module.exports.destroy = async ({ params }) => {
  const { id = null } = params

  if (!id) {
    throw new Error('Missing _id.')
  }

  return remove(id)
}
