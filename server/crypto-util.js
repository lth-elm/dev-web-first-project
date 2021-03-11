const bcrypt = require('bcrypt')

module.exports = {
  hash: (plainTextPasswd, saltRounds = 10) => bcrypt.hash(plainTextPasswd, saltRounds),
  compare: bcrypt.compare
}
