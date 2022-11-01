const Product = require('../../models/products')

const reviews = {
  //Add Review
  addReview (req, res, next) {
    Product.create(req.body, (err, addProductReview) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        addProductReview.reviews.push(req.body)
        next()
      }
    });
  },
  //Update Review 
  updateReview (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedProductReview) => {
        if (err) {
          res.status(400).send({
            msg: err.message
        })
        } else {
          for (review of updatedProductReview){
            res.locals.data.review = req.body.review;
            break
          } 
          next()
        }
      }
    )},
    //Delete Review
    deleteReview (req, res, next){
      Product.findByIdAndDelete(req.params.id, (err, deleteProductReview) => {
        if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.review = deleteProductReview
        next()
      }
      })
    }
  }


module.exports = reviews
