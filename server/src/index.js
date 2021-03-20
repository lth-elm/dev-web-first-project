const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

const express = require('express')

const { getConnection } = require('./connect.js')
const router = require('./routes/index.js')

const app = express()

const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.json())

app.use('/api/v1', router)

getConnection()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
  }).catch(error => {
    console.error(error)
  })
