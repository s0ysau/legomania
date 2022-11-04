const express = require('express')
const router = express.Router()
const setsDataCtrl = require('./setsDataCtrl')
const setsViewCtrl = require('./setsViewCtrl')

router.use((req, res, next) => {
  if (req.session.loggedIn) {
    next()
  } else {
    res.redirect('/user/login')
  }
})

// API Routes
// Index
// Delete
// Update
// Create
// Show

// non API Routes
// Index set
router.get('/', setsDataCtrl.index, setsViewCtrl.index)
// New set
router.get('/new', setsViewCtrl.newView)
// Delete set
router.delete('/:id', setsDataCtrl.destroy, setsViewCtrl.redirectHome)
// Update set
router.put('/:id', setsDataCtrl.update, setsViewCtrl.redirectShow)
// Create set
router.post('/', setsDataCtrl.create, setsViewCtrl.redirectShow)
// Edit set
router.get('/:id/edit', setsDataCtrl.show, setsViewCtrl.edit)
// Show set
router.get('/:id', setsDataCtrl.show, setsViewCtrl.show)

// New Review
router.get('/:id/reviews/new', setsViewCtrl.newReview)
// Delete Review
// router.delete('/:id/reviews')
// Update Review
// router.put('/:id/reviews')
// Create Review
router.post('/:id', setsDataCtrl.show, setsViewCtrl.redirectShow)
// Edit Review
// router.get('/:id/reviews/edit')


module.exports = router
