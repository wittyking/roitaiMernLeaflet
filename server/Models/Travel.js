const mongoose = require('mongoose')

const travelSchema = mongoose.Schema({
    name: String,
    detail: {
        type: String
    },
    lat: {
        type: String
    },
    lng: {
        type: String
    },
    file: String
}, { timestamps: true })

module.exports = mongoose.model('travel', travelSchema)