const express = require('express')
const router = express.Router()
const reviewsDataCtrl = require('../reviews/reviewsDataCtrl')
// const productsViewCtrl = require('../set/setsViewCtrl')
const reviewsViewCtrl = require('../reviews/reviewsViewCtrl')


// API Routes
// Index
// Delete
// Update
// Create
// Show

// non API Routes
// Index 
router.get('/', reviewsDataCtrl.indexReview, reviewsViewCtrl.indexReview)
// New
router.get('/new', reviewsViewCtrl.newView)
// Show
router.get('/:id', reviewsDataCtrl.showReview, reviewsViewCtrl.showReview)
// Delete
router.delete('/:id', reviewsDataCtrl.deleteReview, reviewsViewCtrl.redirectHome)
// Update
router.put('/:id', reviewsDataCtrl.updateReview, reviewsViewCtrl.redirectShow)
// Create
router.post('/', reviewsDataCtrl.addReview, reviewsViewCtrl.redirectShow)




module.exports = router
