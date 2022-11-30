const express = require('express')

const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
    res.json({ message: "Get all workouts" })
})

// GET a single workout
router.get('/:id', (req, res) => {
    res.json({ message: "Get single workout" })
})

// POST a new workout
router.post('/', (req, res) => {
    res.json({ message: "Post a new workout" })
})

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({ message: "Delete a workout" })
})

// Update a workout
router.patch('/:id', (req, res) => {
    res.json({ message: "Update a workout" })
})

module.exports = router