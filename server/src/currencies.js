const express = require('express')
const fetch = require('isomorphic-fetch')

const router = new express.Router()

router.get('/', function getRoot(req, res) {
    const apiKey = process.env.CMC_API_KEY

    fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        method: "GET",
        headers: {
            accept: 'application/json',
            'x-cmc_pro_api_key': apiKey
        }
    })
    .then(function(fetchResponse){
        return fetchResponse.json();
    })
    .catch(error => console.error(error))
    .then(function (responseData) {
        res.json(responseData)
        /*
        const errorCode = responseData.status.errorCode
        if (errorCode != 0) {
            res.json({
                success: false,
                message: 'Error'
            })
            return
        }
        const currencies = responseData.data
        console.log(currencies)
        res.json(currencies)
        */
    })
})

router.get('/:crypto', function getRoot(req, res) {
    const crypto = req.params.crypto
    res.json({
        success: true,
        crypto: crypto,
    })
})

module.exports = router