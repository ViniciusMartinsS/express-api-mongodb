'use strict'

const { Router } = require('express')
const router = Router()

const { create, show, update, destroy } = require('../src/controller/vehicles')
const { formatErr, formatResponse } = require('../src/utils')

router.route('/:id?')
  .get(async (req, res) =>
    show(req)
      .then(response =>
        res.send(formatResponse(response))
      )
      .catch(err =>
        res.status(400).send(formatErr(err))
      )
  )
  .post(async (req, res) =>
    create(req)
      .then(response =>
        res.send(formatResponse(response))
      )
      .catch(err =>
        res.status(400).send(formatErr(err))
      )
  )
  .put(async (req, res) =>
    update(req)
      .then(response =>
        res.send(formatResponse(response))
      )
      .catch(err =>
        res.status(400).send(formatErr(err))
      )
  )
  .delete(async (req, res) =>
    destroy(req)
      .then(response =>
        res.send(formatResponse(response))
      )
      .catch(err =>
        res.status(400).send(formatErr(err))
      )
  )

module.exports = router
