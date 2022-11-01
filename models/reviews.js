const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema(
  {
  review: { type: String, required: true },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5,
    required: true
  },
  isItFavorite: Boolean,  
},
  { timestamps: true }
)

const Reviews = mongoose.model('reviews', reviewSchema)

module.exports = Reviews
