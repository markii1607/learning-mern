const express = require('express')
const dotenv = require('dotenv')

// config dotenv
dotenv.config()

// Express app
const app = express()

// Middleware to log all requests
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.get('/', (req, res) => {
    res.json({message: "Welcome to the app"})
})

// Listener
app.listen(process.env.PORT, () => console.log("Listening to port 3333"))