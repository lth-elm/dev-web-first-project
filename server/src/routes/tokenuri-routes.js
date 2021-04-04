const express = require('express')
const fetch = require('isomorphic-fetch')

const router = new express.Router()

router.all('/', (req, res) => {
  const url = req.body.uri
  fetch(url)
    .then(uri => uri.json())
    .then(metadatas => {
      res.json({
        success: true,
        metadatas
      })
    })
    .catch(error => {
      res.json({
        success: false,
        message: error.message
      })
    })
})

module.exports = router
