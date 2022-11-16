const SET_RESOURCE_PATH = '/legoset'
const REVIEW_RESOURCE_PATH = 'reviews'
const productsViewCtrl = {
  index (req, res, next) {
    res.render('legoset/Indexproducts', res.locals.data)
  },
  newView (req, res, next) {
    res.render('legoset/Newproducts')
  },
  edit (req, res, next) {
    res.render('legoset/Editproducts', res.locals.data)
  },
  show (req, res, next) {
    res.render('legoset/Showproducts', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(SET_RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    res.redirect(`${SET_RESOURCE_PATH}/${res.locals.data.product.id}`)
  },
  newReview (req, res, next) {
    res.locals.data.id = req.params.id
    res.render(`${REVIEW_RESOURCE_PATH}/NewReview`, res.locals.data)
  }
}

module.exports = productsViewCtrl