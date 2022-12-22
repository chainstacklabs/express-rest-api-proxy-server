// This is the server file.

const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

// Rate limiting, limit the amount of request a user can send within a spesific amount of time.
// With this set up the user can only make 100 request max every 10 minutes.
const limiter = rateLimit({
    WindowMs: 10 * 60 * 1000, // 10 minutes in ms.
    max: 100  // 100 request max.
})
app.use(limiter)
app.set('trust proxy', 1)

// Set static folder, this allows our server to pick up the html file in the src folder.
app.use(express.static('src'))

// Routes
// This routes looks into the index.js file in the routes folder, and picks up the '/' route. 
app.use('/api', require('./routes'))

// Enable cors
app.use(cors())

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
