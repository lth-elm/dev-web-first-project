const express = require('express')

const tokenUtils = require('../utils/token-utils.js')

const router = new express.Router()

// In a DATABASE !
const toLog = {
  id: 1,
  login: 'me',
  password: 'password'
}

router.get('/api/v1/me', (req, res) => {
  const token = req.headers.authorization.replace('Bearer ', '')

  const response = res
    .header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
    .header('Expires', '-1')
    .header('Pragma', 'no-cache')

  try {
    const payload = tokenUtils.checkToken(token)
    // const login = payload.login
    // Chercher et trouver l'utilisateur correspondant à ce login
    // TODO: à faire avec mongodb
    console.log({ payload })
    response.json({
      success: true,
      user: {
        ...toLog,
        password: undefined
      }
    })
  } catch (error) {
    response.status(401)
      .json({
        success: false,
        message: 'Token invalide'
      })
  }
})

module.exports = router
