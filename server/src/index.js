const dotenv = require('dotenv')
dotenv.config()

const express = require('express')

const { getConnection } = require('./connect.js')
const { createUser } = require('./models/user-queries.js')
const router = require('./routes/index.js')

const app = express()

const port = 3000

app.use(express.json())

app.use('/api/v1', router)

getConnection()
  .then(() => {
    createUser({
      firstname: 'Kakashi',
      lastname: 'Hatake',
      login: 'ksh',
      email: 'ksh2@hatake.com',
      password: 'ksh-hatake'
    })
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
  }).catch(error => {
    console.error(error)
  })
