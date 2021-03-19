const User = require('./user-model.js')

module.exports = {
  createUser (userData) {
    const user = new User(userData)
    return user.save().then(() => user)
  },
  modifyUser (userData) {
    User.findById(userData.id)
      .then(user => {
        // (...)
      })
  }
}
