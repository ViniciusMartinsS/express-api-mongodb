'use strict'

const { connectDatabase } = require('../../database')

module.exports.find = (email, password, _id) =>
  new Promise(async (resolve, reject) => {
    const { collection } = await getCollection()

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

async function getCollection () {
  const db = await connectDatabase()
  const collection = db.collection('user')

  return { collection }
}
