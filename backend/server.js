const express = require('express')

const app = express()

// Routes
app.get('/', (req, res) => {
    res.json({message: "Welcome to the app"})
})

app.listen(3333, () => console.log("Listening to port 3333"))