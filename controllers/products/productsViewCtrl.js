const RESOURCE_PATH = '/legoproducts'
const productsViewCtrl = {
  index (req, res, next) {
    res.render('legoproducts/Indexproducts', res.locals.data)
  },
  newView (req, res, next) {
    res.render('legoproducts/Newproducts')
  },
  edit (req, res, next) {
    res.render('legoproducts/Editproducts', res.locals.data)
  },
  show (req, res, next) {
    res.render('legoproducts/Showproducts', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    res.redirect(`${RESOURCE_PATH}/${res.locals.data.product.id}`)
  }
}

module.exports = productsViewCtrl