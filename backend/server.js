const express = require('express')
const dotenv = require('dotenv')

// config dotenv
dotenv.config()

// Express app
const app = express()

// Routes
app.get('/', (req, res) => {
    res.json({message: "Welcome to the app"})
})

// Listener
app.listen(process.env.PORT, () => console.log("Listening to port 3333"))