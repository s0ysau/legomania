const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')

// Create Route

const router = express.Router()

// Routes

// The SignUp Routes (Get => form, post => submit form)
router.get('/signup', (req, res) => {
  res.render('user/SignUp.jsx')
})

router.post('/signup', async (req, res) => {
  // encrypt password
  req.body.password = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10)
  )
  // create the New user
  User.create(req.body)
    .then((user) => {
      // redirect to login page
      res.redirect('/user/login')
    })
    .catch((error) => {
      // send error as json
      console.log(error)
      res.json({ error })
    })
})

// The login Routes (Get => form, post => submit form)
router.get('/login', (req, res) => {
  res.render('user/Login.jsx')
})

router.post('/login', async (req, res) => {
  // get the data from the request body
  const { username, password } = req.body
  // search for the user
  User.findOne({ username })
    .then(async (user) => {
      // check if user exists
      if (user) {
        // compare password
        const result = await bcrypt.compare(password, user.password)
        if (result) {
          req.session.username = username
          req.session.loggedIn = true 
          // redirect to fruits page if successful
          res.redirect('/fruits')
        } else {
          // error if password doesn't match
          res.json({ error: "password doesn't match" })
        }
      } else {
        // send error if user doesn't exist
        res.json({ error: "user doesn't exist" })
      }
    })
    .catch((error) => {
      // send error as json
      console.log(error)
      res.json({ error })
    })
})

router.get('/logout', (req, res) => {
  // destroy session and redirect to main page
  req.session.destroy((err) => {
    if (err) {
      console.error(err)
      res.status(500).json(err)
    } else {
      res.redirect('/')
    }    
  })
})

module.exports = router
