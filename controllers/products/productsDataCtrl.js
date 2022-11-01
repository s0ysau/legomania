const Product = require('../../models/products')


const productDController = {
  index (req, res, next) {
    Product.find({}, (err, foundProducts) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.products = foundProducts
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
    req.body.isItFavorite = req.body.isItFavorite === 'on'
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedproduct) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = updatedproduct
        next()
      }
    })
  },
  create (req, res, next) {
    Product.create(req.body, (err, createdproduct) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = createdproduct
        next()
      }
    })
  },
  show (req, res, next) {
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
  }
  // show(req, res, next) {
  //   Product.findById(req.params.id)
  //   .populate("Reviews")
  //   .then((err, foundProducts) => {
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
}

module.exports = productDController
