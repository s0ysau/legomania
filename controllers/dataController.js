const Review = require('../models/reviews')


const dataController = {
  index (req, res, next) {
    Review.find({}, (err, foundReviews) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.reviews = foundReviews
        next()
      }
    })
  },
  destroy (req, res, next) {
    Review.findByIdAndDelete(req.params.id, (err, deleteReview) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.review = deleteReview
        next()
      }
    })
  },
  update (req, res, next) {
    req.body.isItFavorite = req.body.isItFavorite === 'on'
    Review.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedReview) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.review = updatedReview
        next()
      }
    })
  },
  create (req, res, next) {
    req.body.isItFavorite = req.body.isItFavorite === 'on'
    Review.create(req.body, (err, createdReview) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.review = createdReview
        next()
      }
    })
  },
  show (req, res, next) {
    Review.findById(req.params.id, (err, foundReviews) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'There is no set with that ID'
        })
      } else {
        res.locals.data.review = foundReviews
        next()
      }
    })
  },
  favorite (req, res, next) {
    req.body.isItFavorite = req.body.isItFavorite === 'on'
    Review.find(req.body, (err, foundReviews) => {
      if (err) {
        res.status(400).send({
          msg: err.message,
        })
      } else {
        res.locals.data.reviews = foundReviews
        next()
      }
    })
  }
}

module.exports = dataController
