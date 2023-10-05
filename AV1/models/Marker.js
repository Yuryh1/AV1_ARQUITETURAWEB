const { Double } = require('mongodb')
const mongoose = require('mongoose')
const Marker = mongoose.model('Marker',{
    name: String,
    position: [Number],
})
module.exports = Marker