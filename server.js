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


// == Middleware == //


// == legoproducts Routes == //

app.get('/legoproducts', (req, res) => {
    Product.find({}, (err, foundProducts) => {
        if (err){
            console.error(err)
            res.status(400).send(err)
        } else {
            res.render('legoproducts/Indexproducts', {
                product: foundProducts
            })
        }
    })
})

// NEW (not applicable in an api)
app.get('/legoproducts/new', (req,res) => {
    res.render('legoproducts/Newproducts')
})

// DELETE
app.delete('/legoproducts/:id', (req, res) => {
Product.findByIdAndDelete((req.params.id), (err, deleteProduct) => {
        if (err) {
            console.error(err)
            res.status(400).send(err)
        } else {
            res.locals.data.product = deleteProduct
            res.redirect('/legoproducts')
        }
    })
})

// UPDATE
app.put('/legoproducts/:id', (req, res) => {
    
    Product.findByIdAndUpdate(req.params.id, req.body, {new:true},(err, updateProduct) => {
        if (err) {
            console.error()
            res.status(400).send(err)
        } else {
            res.redirect(`/legoproducts/${updateProduct._id}`)
        }
    })
})

// CREATE 
app.post('/legoproducts', (req,res) => {
    
    Product.create(req.body, (err,createProduct) => {
        if (err) {
            console.error(err)
            res.status(400).send(err)
        } else {
            res.redirect('/legoproducts')
            // res.send(createBlog)
        }
    })
})

// EDIT (not applicable in an api)
app.get('/legoproducts/:id/edit', (req, res) => {
    Product.findById(req.params.id, (err, foundProducts) => {
        if (err) {
            console.error(err)
            res.status(400).send(err)
        } else {
            res.render('legoproducts/Editproducts', {
                product: foundProducts
            })
        }
    })
})

// SHOW --- READ --- GET
app.get('/legoproducts/:id', (req,res) => {
    Product.findById(req.params.id, (err, foundProducts) => {
        if (err) {
            console.error(err)
            res.send(400).send(err)
        } else {
            res.render('legoproducts/Showproducts', {
                product: foundProducts
            })
        }
    })
})



// == Port == //
app.listen(3009, function () {
    console.log('Listening on Port 3009')
})
