const { createUser } = require('../models/user-queries.js')

module.exports = {
  createUserController (req, res) {
    // Récupérer les données de la requête
    // (...)
    // const userData = ...
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
    // Récupérer les données de la requête
    // (...)
    // const userData = ...
    // Utiliser updateUser des queries
    // (...)
  }
}
