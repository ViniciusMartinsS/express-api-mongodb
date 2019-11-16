'use strict'

const { config } = require('dotenv')
config()

const express = require('express')
const bodyParser = require('body-parser')

const { validateAuthToken, validatePayload } = require('../middleware')

const app = express()

const { authRouter, vehiclesRouter } = require('../routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/auth', authRouter)
app.use('/vehicles', validateAuthToken, validatePayload, vehiclesRouter)

app.listen(3000, () => {
  console.log('Server running on 3000')
})
