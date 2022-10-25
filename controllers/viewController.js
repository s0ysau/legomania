const RESOURCE_PATH = '/reviews'
const viewController = {
    index (req, res, next) {
        res.render('reviews/Index', res.locals.data)
    },
    newView (req, res, next) {
        res.render('reviews/New')
    },
    edit (req, res, next) {
        res.render('reviews/Edit', res.locals.data)
    },
    show (req, res, next) {
        res.render('reviews/Show', res.locals.data)
    },
    redirectHome (req, res, next) {
        res.redirect(RESOURCE_PATH)
    },
    redirectShow (req, res, next) {
        res.redirect(`${RESOURCE_PATH}/${res.locals.data.review.id}`)
    }
}

module.exports = viewController