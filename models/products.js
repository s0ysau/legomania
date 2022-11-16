const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  nameOfSet: { type: String, required: true },
  collectionName: { type: String, required: true },
  description: { type: String, required: true },
  numberOfPieces: { type: Number, required: true },
  link: { type: String, required: true },
  image: { type: String, required: true },
  review: [{
    headline: { type: String, required: true },
    content: { type: String, required: true },
    rating: {
      type: Number,
      min: 1,
      max: 5,
  }
},
  { timestamps: true }]
})

const Products = mongoose.model('products', productSchema)

module.exports = Products
