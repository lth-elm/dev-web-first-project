const { verify } = require("jsonwebtoken")

function verifyToken (req, res, next) {
    const token = verifyToken(req.header('Authorization'))

    if (token) {
        next()
        return
    }
}

module.exports = verifyToken