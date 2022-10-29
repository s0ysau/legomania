require('dotenv').config()
// == Required Modules == //
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const db = require('./models/db')
const Product = require('./models/products')

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
app.use('/legoproducts', require('./controllers/productsRController'))

// == Middleware == //

app.get('/home', (req, res) => {
    res.render('home/Home')
})


// == Port == //
app.listen(3009, function () {
    console.log('Listening on Port 3009')
})
