const express = require('express')
const router = express.Router()
const reviewsDataCtrl = require('./reviewsDataCtrl')
const reviewsViewCtrl = require('./reviewsViewCtrl')


// API Routes
// Index
// Delete
// Update
// Create
// Show

// non API Routes
// Delete
router.delete('/:id', reviewsDataCtrl.deleteReview, reviewsViewCtrl.redirectHome)
// Update
router.put('/:id', reviewsDataCtrl.updateReview, reviewsViewCtrl.redirectShow)
// Create
router.post('/:id', reviewsDataCtrl.addReview, reviewsViewCtrl.redirectShow)




module.exports = router
