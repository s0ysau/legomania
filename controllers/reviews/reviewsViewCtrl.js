const RESOURCE_PATH = '/legoproducts'
const reviewsViewCtrl = {
  redirectHome (req, res, next) {
    res.redirect(`${RESOURCE_PATH}/${res.locals.data.product.id}`)
  },
  redirectShow (req, res, next) {
    res.redirect(`${RESOURCE_PATH}/${res.locals.data.product.id}`)
  }
}

module.exports = reviewsViewCtrl
