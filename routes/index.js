const express = require('express')
const router = express.Router()
const needle = require('needle') // You could use 'node-fetch' too, but it might have some conflicts. 

// Env variables
const ETHERSCAN_API_BASE_URL = process.env.ETHERSCAN_API_BASE_URL
const ETHERSCAN_API_KEY_NAME = process.env.ETHERSCAN_API_KEY_NAME
const ETHERSCAN_API_KEY_VALUE = process.env.ETHERSCAN_API_KEY_VALUE

// Route from the api file.
router.get('/', async (req, res) => {
    try {
        
        // URLSearchParams allows us to build the URL 
        const apiKey = new URLSearchParams({
            [ETHERSCAN_API_KEY_NAME]: ETHERSCAN_API_KEY_VALUE,
        })

        // Build the full API URL using URLSearchParams
        const fullUrl = `${ETHERSCAN_API_BASE_URL}&${apiKey}`

        // Send the request to the Etherscan API, and restrieve the JSON body response.
        const apiResponse = await needle('get', fullUrl)
        const data = apiResponse.body

        // Console log the API key and the full URL, when a request is sent if in DEV mode.
        if(process.env.NODE_ENV !== "production") {
            console.log(`key = ${apiKey}`)
            console.log(`Full request URL = ${fullUrl}`)
        }

        res.status(200).json(data)        
    } catch (error) {
        res.status(500).json({ error })
    }
})

module.exports = router