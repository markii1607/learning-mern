const mongoose = require('mongoose')

// Schema
const Schema = mongoose.Schema
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    },
    load: {
        type: Number,
        required: true,
    }
}, { timestamps: true })

// Model
module.exports = mongoose.model('Workout', workoutSchema)