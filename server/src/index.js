const express = require('express')
const app = express()
const port = 3000

app.get('/currencies', (req, res) => {
  res.json(
    [
      'Eth',
      'Btc',
      'Ltc',
      'Xrp',
      'Bat',
      'Dot'
    ]
  )
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})