const dotenv = require('dotenv')
const express = require('express')

const router = require('./routes/index.js')

const app = express()

dotenv.config()

const port = 3000

app.use(express.json())

app.use('/api/v1', router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
