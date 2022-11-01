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

const productSchema = new Schema({
  nameOfSet: { type: String, required: true },
  collectionName: { type: String, required: true },
  description: { type: String, required: true },
  numberOfPieces: { type: Number, required: true },
  link: { type: String, required: true },
  image: { type: String, required: true },
  review: [reviewSchema]
}
)

const Products = mongoose.model('products', productSchema)

module.exports = Products