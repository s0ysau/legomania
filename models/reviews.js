const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema ({
  theme: { type: String, required: true},
  name: { type: String, required: true},
  review: { type: String, required: true},
  rating: { type: Number, optional: true},
  isItFavorite: Boolean
})

const reviews = mongoose.model('reviews', reviewSchema)

module.exports = reviews 