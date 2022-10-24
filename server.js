require('dotenv').config()
// == Required Modules == //
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const reviews = require('./models/reviews')
const db = require('./models/db')

// == Configure the app == //
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


// == Middleware == //

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})


// == Port == //
app.listen(3009, function() {
  console.log('Listening on Port 3009')
})
