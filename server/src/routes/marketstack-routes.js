const express = require('express')
const fetch = require('isomorphic-fetch')

const router = new express.Router()

router.get('/', (req, res) => {
  fetch('http://api.marketstack.com/v1/eod/latest?access_key=490d5c6512308165c3ff386acb13ac1b&symbols=AAPL,TSLA,MSFT,AAL,AAXN,MAT,OPT,OXFD,PZZA')
    .then(uri => uri.json())
    .then(datas => {
      res.json({
        success: true,
        datas
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
