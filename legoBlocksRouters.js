require('dotenv').config()
const express = require('express')


app.use(express.urlencoded({ extended: true })) // This code makes us have req.body
app.engine('jsx', require('jsx-view-engine').createEngine()) // create the jsx view engine
app.set('view engine', 'jsx') // register the jsx view engine



