const bcrypt = require('bcrypt')

module.exports = {
  hash (passwd) {
    return bcrypt.hash(passwd, 10)
  },
  /**
   * Compare une chaine en claire avec un hash
   *
   * @function
   * @async
   *
   * @param {string} passwd - Mot de passe en clair
   * @param {string} hash - Hash à comparer
   * @returns {Promise.<boolean>}
   */
  compareHash (passwd, hash) {
    return bcrypt.compare(passwd, hash)
  }
}
