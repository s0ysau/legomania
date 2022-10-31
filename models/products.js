const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new mongoose.Schema({
  nameOfSet: { type: String, required: true },
  collectionName: { type: String, required: true },
  description: { type: String, required: true },
  numberOfPieces: { type: Number, required: true },
  link: { type: String, required: true },
  image: { type: String, required: true }
}, {
  review: {
    type: Schema.Types.review,
    required: true,
    ref: 'Reviews'
    }
}, {
  rating: {
    type: Schema.Types.rating,
    required: true,
    ref: 'Reviews'
    }
}, {
  isItFavorite: {
    type: Schema.Types.isItFavorite,
    required: true,
    ref: 'Reviews'
  }
}
)

const Products = mongoose.model('products', productSchema)

module.exports = Products