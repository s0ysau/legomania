const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema ({
  //Code Block
})

const reviews = mongoose.model('reviews', reviewSchema)

module.exports = reviews 