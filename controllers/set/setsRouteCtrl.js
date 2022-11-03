const express = require('express')
const router = express.Router()
const setsDataCtrl = require('./setsDataCtrl')
const setsViewCtrl = require('./setsViewCtrl')

const reviewsDataCtrl = require('../reviews/reviewsDataCtrl')


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
// Create Review
router.post('/:id/reviews', reviewsDataCtrl.createReview, setsViewCtrl.redirectShow)


module.exports = router
