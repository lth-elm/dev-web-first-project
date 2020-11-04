const dotenv = require('dotenv')
const express = require('express')

const langagesinfoRoutes = require('./langagesinfo.js')
const currenciesRoutes = require('./currencies.js')

const app = express()

dotenv.config()

const port = 3000

app.use('/api/v1/langagesinfo', langagesinfoRoutes)
app.use('api/v1/currencies', currenciesRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})