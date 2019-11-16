'use strict'

const { ObjectId } = require('mongodb')
const { connectDatabase } = require('../../database')

module.exports.create = vehicle =>
  new Promise(async (resolve, reject) => {
    const { collection } = await getCollection()

    collection.insertOne(vehicle, (err, vehicle) => {
      if (err) {
        return reject(err)
      }

      console.log('Vehicle inserted successfully!')
      const { ops } = vehicle
      return resolve(ops)
    })
  })

module.exports.find = (_id, brand) =>
  new Promise(async (resolve, reject) => {
    const { collection } = await getCollection()

    collection
      .find({
        ...(_id && { _id: new ObjectId(_id) }),
        ...(brand && { brand }) })
      .toArray((err, vehicle) => {
        if (err) {
          return reject(err)
        }

        console.log('Vehicle queried successfully!')
        return resolve(vehicle)
      })
  })

module.exports.update = (_id, vehicle) =>
  new Promise(async (resolve, reject) => {
    const { collection } = await await getCollection()

    collection.findOneAndUpdate(
      { _id: new ObjectId(_id) }, { $set: vehicle }, { returnOriginal: false },
      (err, vehicle) => {
        if (err) {
          return reject(err)
        }

        console.log('Vehicle updated successfully!')
        const { value } = vehicle
        return resolve([ value ])
      })
  })

module.exports.remove = _id =>
  new Promise(async (resolve, reject) => {
    const { collection } = await getCollection()

    collection.findOneAndDelete({ _id: new ObjectId(_id) }, (err, vehicle) => {
      if (err) {
        return reject(err)
      }

      console.log('Vehicle deleted successfully!')
      const { value } = vehicle
      return resolve([ value ])
    })
  })

async function getCollection () {
  const db = await connectDatabase()
  const collection = db.collection('vehicle')

  return { collection }
}
