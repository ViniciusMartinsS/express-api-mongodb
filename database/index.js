'use strict'

const { MongoClient } = require('mongodb')

const URL = process.env.MONGO_URL

module.exports.connectDatabase = () =>
  new Promise((resolve, reject) => {
    MongoClient.connect(URL, { useUnifiedTopology: true }, (err, client) => {
      if (err) {
        return reject(err)
      }

      const db = client.db('express')
      console.log('Database Connected Successfully!')

      module.exports = { db }
      return resolve(db)
    })
  })
