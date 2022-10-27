const RESOURCE_PATH = '/legoblogs'
const viewController = {
  index (req, res, next) {
    res.render('legoblogs/Index', res.locals.data)
  },
  newView (req, res, next) {
    res.render('legoblogs/New')
  },
  edit (req, res, next) {
    res.render('legoblogs/Edit', res.locals.data)
  },
  show (req, res, next) {
    res.render('legoblogs/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    res.redirect(`${RESOURCE_PATH}/${res.locals.data.review.id}`)
  },
  favorite (req, res, next) {
    res.render('legoblogs/Favorite', res.locals.data)
  }
}

module.exports = viewController
