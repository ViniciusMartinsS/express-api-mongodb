'use strict'

const { config } = require('dotenv')
config()

const express = require('express')
const bodyParser = require('body-parser')

const { connectDatabase } = require('../database')
const { validateAuthToken } = require('../middleware')

const app = express()

const { usersRouter, vehiclesRouter } = require('../routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/vehicles', validateAuthToken, vehiclesRouter)
app.use('/login', usersRouter)

app.listen(3000, () => {
  connectDatabase()
  console.log('Server running on 3000')
})
