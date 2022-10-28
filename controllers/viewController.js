const RESOURCE_PATH = '/legoreviews'
const viewController = {
  index (req, res, next) {
    res.render('legoreviews/Index', res.locals.data)
  },
  newView (req, res, next) {
    res.render('legoreviews/New')
  },
  edit (req, res, next) {
    res.render('legoreviews/Edit', res.locals.data)
  },
  show (req, res, next) {
    res.render('legoreviews/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    res.redirect(`${RESOURCE_PATH}/${res.locals.data.review.id}`)
  },
  favorite (req, res, next) {
    res.render('legoreviews/Favorite', res.locals.data)
  }
}

module.exports = viewController
