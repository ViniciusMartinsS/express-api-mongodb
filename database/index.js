'use strict'

const { MongoClient } = require('mongodb')

const URL = process.env.MONGO_URL

let db = null

module.exports.connectDatabase = () =>
  new Promise((resolve, reject) => {
    if (db) {
      console.log('Returning a connection already established!')
      return resolve(db)
    }

    MongoClient.connect(URL, { useUnifiedTopology: true }, (err, client) => {
      if (err) {
        return reject(err)
      }

      db = client.db('express')
      console.log('Database Connected Successfully!')

      return resolve(db)
    })
  })
