require('dotenv').config()
// == Required Modules == //
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const reviews = require('./models/reviews')

// == Configure the app == //



// == Middleware == //
app.use(methodOverride('_method'))


// == Middleware == //

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})


// == Port == //
app.listen(3009, function() {
  console.log('Listening on Port 3009')
})
