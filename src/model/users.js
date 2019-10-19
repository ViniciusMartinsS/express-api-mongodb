'use strict'

module.exports.find = (email, password) =>
  new Promise(async (resolve, reject) => {
    const { collection } = getCollection()

    collection
      .find({ email })
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
