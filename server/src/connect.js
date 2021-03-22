const mongoose = require('mongoose')

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

module.exports = {
  getConnection () {
    const mongoUrl = process.env.MONGO_ATLAS_URL || process.env.MONGO_URL
    return mongoose.connect(mongoUrl, mongoOptions)
  }
}
