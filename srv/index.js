'use strict'

const { config } = require('dotenv')
config()

const express = require('express')
var bodyParser = require('body-parser')
const { connectDatabase } = require('../database')

const app = express()

const { vehiclesRouter } = require('../routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/vehicles', vehiclesRouter)

app.listen(3000, () => {
  connectDatabase()
  console.log('Server running on 3000')
})
