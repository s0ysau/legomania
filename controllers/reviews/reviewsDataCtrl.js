// const Product = require('../../models/products')
const Review = require('../../models/reviews')

const reviewsDataCtrl = {
  //index review 
  indexReview (req, res, next) {
    Review.find({}, (err, allReviews) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.review = allReviews 
        next()
      }
    })
  },
  //Show Review
  //Add Review
  addReview (req, res, next) {
    Review.create(req.body, (err, addReview) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.review = addReview
        next()
      }
    });
  },
  //Update Review 
  updateReview (req, res, next) {
    Review.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedReview) => {
        if (err) {
          res.status(400).send({
            msg: err.message
        })
        } else {
          for (review of updatedReview){
            res.locals.data.review = req.body.review;
            break
          } 
          next()
        }
      }
    )},
    //Delete Review
    deleteReview (req, res, next){
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
    // showReview (req, res, next) {
    //   Review.findById({_id: req.params.id})
    //   .populate('review')
    //   .exec((err, foundProducts) => {
    //     if (err) {
    //       res.status(404).send({
    //         msg: err.message,
    //         output: 'There is no set with that ID'
    //       })
    //     } else {
    //       res.locals.data.product = foundProducts
    //       next()
    //     }
    //   })
    // }
    showReview (req, res, next) {
      Review.findById(req.params.id, (err, foundReviews) => {
        if (err) {
          res.status(404).send({
            msg: err.message,
            output: 'There is no set with that ID'
          })
        } else {
          res.locals.data.product = foundReviews
          next()
        }
      })
    }
  }


module.exports = reviewsDataCtrl
