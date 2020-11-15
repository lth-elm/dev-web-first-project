const jwt = require('jsonwebtoken')
const express = require('express')

const router = new express.Router()


router.post('/token', (req, res) => {
    const authorizedLogin = process.env.AUTHORIZED_LOGIN
    const authorizedPasswd = process.env.AUTHORIZED_PASSWD
    const tokenSecret = process.env.SECRET || '53CR37!'

    const body = req.body

    if (!body || !body.login || !body.password) {
        res.json({
            success: false,
            message: 'Login and password are required'
        })
        return
    }

    if (body.password !== authorizedPasswd || body.login !== authorizedLogin) {
        res.json({
            success: false,
            message: 'Invalid credentials'
        })
        return
    }

    const options = {
        expiresIn: '1h',
    }

    const secret = tokenSecret

    const payload = {
        login: body.login,
    }

    const token = jwt.sign(payload, secret, options)

    res.json({
        success: true,
        token
    })
})

module.exports = router