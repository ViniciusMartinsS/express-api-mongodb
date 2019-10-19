'use strict'

module.exports.find = (email, password, _id) =>
  new Promise(async (resolve, reject) => {
    const { collection } = getCollection()

    collection
      .find({
        ...(_id && { _id }),
        ...(email && { email }),
        ...(password && { password })
      })
      .toArray((err, user) => {
        if (err) {
          return reject(err)
        }

        console.log('User fetched successfully!')
        return resolve(user)
      })
  })

function getCollection () {
  const { db } = require('../../database')
  const collection = db.collection('user')

  return { collection }
}
