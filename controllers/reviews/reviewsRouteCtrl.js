const express = require('express')
const router = express.Router()
const reviewsDataCtrl = require('./reviewsDataCtrl')
const productsViewCtrl = require('../products/productsViewCtrl')
const reviewsViewCtrl = require('../reviews/reviewsViewCtrl')


// API Routes
// Index
// Delete
// Update
// Create
// Show

// non API Routes
// Index
router.get('/:nameOfSet/review', reviewsDataCtrl.addReview, reviewsViewCtrl.show)
// Delete
router.delete('/:id', reviewsDataCtrl.deleteReview, productsViewCtrl.redirectHome)
// Update
router.put('/:id', reviewsDataCtrl.updateReview, productsViewCtrl.redirectShow)
// Create
router.post('/:id/review', reviewsDataCtrl.addReview, productsViewCtrl.redirectShow)




module.exports = router
