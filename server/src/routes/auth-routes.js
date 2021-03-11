const express = require('express')

const tokenUtils = require('../utils/token-utils.js')

const router = new express.Router()

router.post('/token', (req, res) => {
  const authorizedLogin = process.env.AUTHORIZED_LOGIN
  const authorizedPasswd = process.env.AUTHORIZED_PASSWD

  const body = req.body

  if (!body || !body.username || !body.password) {
    res.status(401)
      .json({
        success: false,
        message: 'Login and password are required'
      })
    return
  }

  if (body.password !== authorizedPasswd || body.username !== authorizedLogin) {
    res.json({
      success: false,
      message: 'Invalid credentials'
    })
    return
  }

  const payload = {
    username: body.username
  }

  const token = tokenUtils.createToken(payload)

  res.status(201)
    .json({
      success: true,
      token
    })
})

module.exports = router
