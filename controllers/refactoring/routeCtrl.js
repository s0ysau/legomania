const express = require('express')
const router = express.Router()

const dataCtrl = require('./dataCtrl')
const viewsCtrl = require('./viewsCtrl')

router.use((req,res, next) => {
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
//Index
//New
//Destroy
//Update
//Create
//Edit
//Show



module.exports = router 