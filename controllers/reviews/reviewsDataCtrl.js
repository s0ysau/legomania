const Product = require('../../models/products')
const Review = require('../../models/reviews')

const reviewsDataCtrl = {
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
    }
  }


module.exports = reviewsDataCtrl
