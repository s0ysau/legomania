const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new mongoose.Schema(
  {
  review: { type: String, required: true },
  rating: { type: String, optional: true },
  isItFavorite: Boolean,  
  }, {
  nameOfSet: {
    type: Schema.Types.nameOfSet,
    required: true,
    ref: 'Products'
    }
}, {
  collectionName: {
    type: Schema.Types.collectionName,
    required: true,
    ref: 'Products'
    }
}, {
  link: {
    type: Schema.Types.link,
    required: true,
    ref: 'Products'
    }
}, {
  image: {
    type: Schema.Types.image,
    required: true,
    ref: 'Products'
    }
},
  { timestamps: true }
)

const Reviews = mongoose.model('reviews', reviewSchema)

module.exports = Reviews
