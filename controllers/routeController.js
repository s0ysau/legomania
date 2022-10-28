const express = require('express')
const router = express.Router()
const dataController = require('./dataController')
const viewController = require('./viewController')

// API Routes
// Index
// Delete
// Update
// Create
// Show

// non API Routes
// Index
router.get('/', dataController.index, viewController.index)
// New
router.get('/new', viewController.newView)
// Delete
router.delete('/:id', dataController.destroy, viewController.redirectHome)
// Update
router.put('/:id', dataController.update, viewController.redirectShow)
// Create
router.post('/', dataController.create, viewController.redirectShow)
// Edit
router.get('/:id/edit', dataController.show, viewController.edit)
// Show
router.get('/:id', dataController.show, viewController.show)

router.get('/legoreviews/favorite', dataController.favorite, viewController.favorite)


module.exports = router
