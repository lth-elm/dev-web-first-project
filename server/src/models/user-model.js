const { hash } = require('../utils/crypto.js')

const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema(
  {
    firstname: {
      type: String,
      required: [true, 'Le prénom est manquant'],
      trim: true
    },
    lastname: {
      type: String,
      required: [true, 'Le nom est manquant'],
      trim: true
    },
    email: {
      type: String,
      required: [true, "L'adresse email nom est manquante"],
      trim: true,
      lowercase: true
      // unique: true
    },
    login: {
      type: String,
      required: [true, "Le nom d'utilisateur est manquant"],
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Le mot de passe est manquant']
    }
  }
)

UserSchema.set('toJSON', {
  ransform (doc, ret) {
    delete ret.password
    return ret
  }
})

UserSchema.pre('save', async function preSave () {
  const user = this
  if (!user.isModified('password')) {
    return
  }
  user.password = await hash(user.password)
})

module.exports = mongoose.model('User', UserSchema)

/**
 * @typedef UserMongooseDocument
 * @type {UserData & import('mongoose').Document}
 */

/**
 * @typedef UserData
 * @type {Object}
 *
 * @property {string} firstname - Prénom
 * @property {string} lastname - Nom
 * @property {string} email - Adresse email
 * @property {string} login - Nom d'utilisateur
 * @property {string} password - Mot de passe
 */
