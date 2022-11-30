const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const workoutRoutes = require('./routes/workouts')

// config dotenv
dotenv.config()

// Connect to Mongo DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to db"))
    .catch((err) => console.log(err))

// Express app
const app = express()

// Middlewares
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes for APIs
app.use('/api/workouts', workoutRoutes)

// Listener
app.listen(process.env.PORT, () => console.log("Listening to port 3333"))