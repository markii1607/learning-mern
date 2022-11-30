const express = require('express')
const Workout = require('../models/workoutModel')

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
router.post('/', async (req, res) => {
    // sample document call
    const { title, reps, load } = req.body

    try {
        const workout = await Workout.create({ title, reps, load })
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
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