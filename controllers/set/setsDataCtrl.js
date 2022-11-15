const Product = require('../../models/products')

const productDController = {
  index (req, res, next) {
    Product.find({}, (err, allProducts) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.products = allProducts
        next()
      }
    })
  },
  destroy (req, res, next) {
    Product.findByIdAndDelete(req.params.id, (err, deleteProduct) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = deleteProduct
        next()
      }
    })
  },
  update (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updateProduct) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = updateProduct
        next()
      }
    })
  },
  // updateReview (req, res, next) {
  //   Product.findById(req.params.id, (err, foundProducts) => {
  //     if (err) {
  //       res.status(400).send({
  //         msg: err.message
  //       })
  //     } else {
  //       foundProducts.review.push(req.body)
  //       Product.findByIdAndUpdate(req.params.id, foundProducts, { new: true }, (err, updateProduct) => {
  //         if (err) {
  //           res.status(400).send({
  //           msg: err.message
  //           })
  //         } else {
  //           res.locals.data.product.review = updateProduct
  //           next()
  //         }
  //       })
  //     }
  //   })
  // },
  create (req, res, next) {
    Product.create(req.body, (err, createProduct) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = createProduct
        next()
      }
    })
  },
  show(req, res, next) {
    Product.findById(req.params.id, (err, foundProducts) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'There is no set with that ID'
        })
      } else {
        res.locals.data.product = foundProducts
        next()
      }
    })
  },
  // showReviews (req, res, next) {
  //   Product.findById({_id: req.params.id})
  //   .populate('review')
  //   .exec((err, foundProducts) => {
  //     if (err) {
  //       res.status(404).send({
  //         msg: err.message
  //       })
  //     } else {
  //       res.locals.data.product = foundProducts
  //       next()
  //     }
  //   })
  // }
}

module.exports = productDController
