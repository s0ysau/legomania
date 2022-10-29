const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  nameOfSet: { type: String, required: true },
  collectionName: { type: String, required: true },
  description: { type: String, required: true },
  numberOfPieces: { type: Number, required: true },
  link: { type: String, required: true },
  image: { type: String, required: true }
})

const Products = mongoose.model('products', productSchema)

module.exports = Products