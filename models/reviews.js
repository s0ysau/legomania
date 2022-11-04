const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema(
  {
  headline: { type: String, required: true },
  content: { type: String, required: true },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'products'
  }
},
  { timestamps: true }
)

const Reviews = mongoose.model('reviews', reviewSchema)

module.exports = Reviews
