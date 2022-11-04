require('dotenv').config()
// == Required Modules == //
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const db = require('./models/db')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const setsRoute = require('./controllers/set/setsRouteCtrl')


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

app.use(
    session({
        secret: process.env.SECRET,
        store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
        saveUninitialized: true,
        resave: false,
    })
)

// == Middleware == //
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/legoset', setsRoute)
app.use('/user', require('./controllers/authController'))

// == Middleware == //

app.get('/home', (req, res) => {
    res.render('home/Home')
})


// == Port == //
app.listen(3009, function () {
    console.log('Listening on Port 3009')
})

