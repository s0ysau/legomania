require('dotenv').config()
// == Required Modules == //
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const db = require('./models/db')
const Blogs = require('./models/blogs')

// == Configure the app == //
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})
db.once('open', () => {
  console.log('Connected to MongoDB')
})

// == Middleware == //
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/legoreviews', require('./controllers/routeController'))


// == Middleware == //


// == legoBlogs Routes == //

app.get('/legoblogs', (req, res) => {
  Blogs.find({}, (err, foundBlogs) => {
      if (err){
          console.error(err)
          res.status(400).send(err)
      } else {
          res.render('legoreviews/Index', {
              Blogs: foundBlogs
          })
      }
  })
})

// NEW (not applicable in an api)
app.get('/legoblogs/new', (req,res) => {
  res.render('legoreviews/New')
})

// DELETE
app.delete('/legoblogs/:id', (req, res) => {
  Blogs.findByIdAndDelete((req.params.id), (err, deleteReview) => {
      if (err) {
          console.error(err)
          res.status(400).send(err)
      } else {
          res.locals.data.review = deleteReview
          res.redirect('/legoreviews')
      }
  })
})

// UPDATE
app.put('/legoblogs/:id', (req, res) => {
  req.body.readyToEat === 'no' || req.body.readyToEat === true ? req.body.readyToEat = true : req.body.readyToEat = false
  Blogs.findByIdAndUpdate(req.params.id, req.body, {new:true},(err, updateBlog) => {
      if (err) {
          console.error()
          res.status(400).send(err)
      } else {
          res.redirect(`/legoreviews/${updateBlog._id}`)
      }
  })
})

// CREATE 
app.post('/legoblogs', (req,res) => {
  req.body.readyToEat === 'on' ? req.body.readyToEat = true : req.body.readyToEat = false
  Blogs.create(req.body, (err,createBlog) => {
      if (err) {
          console.error(err)
          res.status(400).send(err)
      } else {
      
      res.redirect('/legoreviews')
      // res.send(createBlog)
  }
})
})

// EDIT (not applicable in an api)
app.get('/legoblogs/:id/edit', (req, res) => {
  Blogs.findById(req.params.id, (err, foundBlogs) => {
      if (err) {
          console.error(err)
          res.status(400).send(err)
      } else {
          res.render('legoreviews/Edit', {
              Blog: foundBlogs
          })
      }
  })
})

// SHOW --- READ --- GET
app.get('/legoblogs/:id', (req,res) => {
  Blogs.findById(req.params.id, (err, foundBlogs) => {
      if (err) {
          console.error(err)
          res.send(400).send(err)
      } else {
          res.render('legoreviews/Show', {
              Blog: foundBlogs
          })
      }
  })
})



// == Port == //
app.listen(3009, function () {
  console.log('Listening on Port 3009')
})
