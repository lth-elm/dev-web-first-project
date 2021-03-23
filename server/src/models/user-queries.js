const User = require('./user-model.js')

// CRUD

module.exports = {
  /**
 * Crée un utilisateur dans la base de données
 *
 * @function
 * @async
 *
 * @param {import('./user-model').UserData} userData
 * @returns {Promise.<import('./user-model').UserMongooseDocument>}
 */
  createUser (userData) {
    const user = new User(userData)
    return user.save().then(() => user)
  },

  async updateUser (userData) {
    return User.findByIdAndUpdate(userData.id, userData, { new: true })
  },

  getUserByLogin (login) {
    return User.findOne({ login })
  },

  getUser (userData) {
    return User.find()
  },

  deleteUser (user) {
    User.deleteOne({ id: user.id })
  }
}
