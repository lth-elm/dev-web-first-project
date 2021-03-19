const express = require('express')
const { createUser } = require('../models/user-queries')
const router = new express.Router()

router.post('', (req, res) => {
  const firstname = req.body.firstname
  const lastname = req.body.lastname
  const email = req.body.email
  const login = req.body.login
  const password = req.body.password

  createUser({
    firstname,
    lastname,
    login,
    email,
    password
  }).then(user => {
    res.status(201).json({
      success: true,
      user
    })
  })
})

module.exports = router
