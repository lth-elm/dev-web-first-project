const express = require('express')
// const fetch = require('isomorphic-fetch')

const langagesinfoRoutes = require('./langagesinfo-routes.js')
const currenciesRoutes = require('./currencies-routes.js')
const authRoutes = require('./auth-routes.js')

const verifyToken = require('../middlewares/verify-token.js')

const router = new express.Router()

router.use('/auth', authRoutes)
router.use('/langagesinfo', langagesinfoRoutes)
router.use('/currencies', verifyToken, currenciesRoutes)

module.exports = router
