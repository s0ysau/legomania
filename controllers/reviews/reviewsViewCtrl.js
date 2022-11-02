const RESOURCE_PATH = '/reviews'
const reviewsViewCtrl = {
  indexReview (req, res, next) {
    res.render('reviews/IndexReview', res.locals.data)
  },
  newView (req, res, next) {
    res.render('reviews/NewReview')
  },
  editReview (req, res, next) {
    res.render('reviews/EditReview', res.locals.data)
  },
  showReview (req, res, next) {
    res.render('reviews/ShowReview', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    res.redirect(`${RESOURCE_PATH}/${res.locals.data.review.id}`)
  }
}

module.exports = reviewsViewCtrl
