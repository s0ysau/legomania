const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  name: { type: String, required: true },
  blog: { type: String, required: true },
  link: { type: String, optional: true },
  wishList: Boolean
},
{ timestamps: true})

const Blogs = mongoose.model('blogs', blogSchema)

module.exports = Blogs