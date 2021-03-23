const { createUser } = require('../models/user-queries.js')
const { updateUser } = require('../models/user-queries.js')

module.exports = {
  createUserController (req, res) {
    const userData = req.body.user // ???
    // Utiliser createUser des queries
    createUser(userData)
      .then(user => {
        res.status(201).json({
          success: true,
          user
        })
      })
      .catch(err => {
        res.status(400).json({
          sucess: false,
          message: err.message
        })
      })
  },

  updateUserController (req, res) {
    const userData = req.body.user
    // Utiliser updateUser des queries
    updateUser(userData)
      .then((user) => {
        res.json({
          success: true,
          user
        })
      })
      .catch(err => {
        console.error(err)
        res.status(500).json({
          success: false,
          message: 'Impossible de modifier cet utilisateur'
        })
      })
  }
}
