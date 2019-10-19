const { Router } = require('express')
const router = Router()

const { login } = require('../src/controller/auth')
const { formatErr, formatResponse, generateJWT } = require('../src/utils')

router.route('/login')
  .post(async (req, res) =>
    login(req)
      .then(response => {
        const token = generateJWT(response)
        return res.send(formatResponse(response, token))
      })
      .catch(err =>
        res.status(400).send(formatErr(err))
      )
  )

module.exports = router
