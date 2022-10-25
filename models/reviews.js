const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema ({
  theme: { type: String, required: true},
  name: { type: String, required: true},
  review: { type: String, required: true},
  rating: { type: String, optional: true},
  isItFavorite: Boolean
})

const Reviews = mongoose.model('reviews', reviewSchema)

module.exports = Reviews 