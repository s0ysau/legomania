<h1>Get Your Brick On</h1>
<p>The purpose of this site is to rate and review Lego sets by using CRUD to create, read, update and delete Lego sets and review posts</p>

<h2>Wireframe and Current Pages</h2>
<h3>Lego Set Page and Home page</h3>

![GA-Project-2](https://user-images.githubusercontent.com/105724406/200002095-2d5bca6e-f128-4469-8ffa-09225887f92c.png)
<img width="1269" alt="legoset_page" src="https://user-images.githubusercontent.com/105724406/200004348-61645607-ac61-48b3-a022-99c015dae00e.png">
<img width="938" alt="Screenshot 2022-11-04 at 10 49 39 AM" src="https://user-images.githubusercontent.com/105724406/200004700-8259168e-8a1e-483b-a9f3-caf4db293ab8.png">

<h3>Show individual product-set</h3>

![Page1](public/Readme/single_product_page.png)
![show_productpg_final](https://user-images.githubusercontent.com/105724406/200002259-faadd989-c955-4882-9394-e2f646c4f92e.png)

<h3>Create product-set</h3>

<img width="533" alt="edit_product_pg" src="https://user-images.githubusercontent.com/105724406/200002347-fb9ed1e6-b568-4de0-8c25-1b5fe128573b.png">
<img width="756" alt="Screenshot 2022-11-04 at 9 53 10 AM" src="https://user-images.githubusercontent.com/105724406/199990746-3a419e44-2e18-4a7e-b9b7-86a213023aab.png">


<h3>Edit individual product</h3>

![edit_productpf_WF](https://user-images.githubusercontent.com/105724406/200003755-83df2bbc-6579-4139-952d-dca50ac133f1.png)
![edit_productpg_final](https://user-images.githubusercontent.com/105724406/200003181-fa89cdea-ee88-4061-a3a1-9c3438f7ed92.png)

<h2>Organization</h2>
There are two main scetions of the site: A Product section to display collections of Lego sets and a Review section to post reviews and ratings about the lego set. 

The project is organized by the MVC format. In the project, you will find it divided into three folders: 

<h3>Models</h3>
There are three models.js files.
<ul>
<li>db.js - For the database</li>
<li>products.js - For the Product information</li>
<li>reviews.js - For the Reviews </li>
</ul>

<h3>ERD</h3>

![LegoMania ERD Diagram](https://user-images.githubusercontent.com/105724406/200001662-0994b22a-4ab5-4f20-bced-eccdd4329981.png)

products.js

```
const productSchema = new Schema({
  nameOfSet: { type: String, required: true },
  collectionName: { type: String, required: true },
  description: { type: String, required: true },
  numberOfPieces: { type: Number, required: true },
  link: { type: String, required: true },
  image: { type: String, required: true },
  review: [{
    type: Schema.Types.ObjectId,
    ref: 'reviews'
  }]
})
```

reviews.js

```
const reviewSchema = new Schema(
  {
  headline: { type: String, required: true },
  content: { type: String, required: true },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'products'
  }
},
  { timestamps: true }
)
```

The Name of the set and the theme/collection along with the link are shared information that is currently separated. 

<h3>Views</h3>
The views section is divided into four (4) folders:

```
views
├── home
│   ├── Home.jsx
├── layouts
│   ├── Default.jsx
│   ├── Productlayout.jsx
├── legoset
│   ├── Editproducts.jsx
│   ├── Indexproducts.jsx
│   ├── Newproducts.jsx
│   └── Showproducts.jsx
├── reviews
│   ├── EditReview.jsx
│   ├── IndexReview.jsx
│   ├── NewReview.jsx
│   └── ShowReview.jsx
```

<h3>Controllers</h3>

The controller folder is divided into three sections: Data, Route, Views files for the Products, a Data file for Reviews and an authentication file. The setsRouteCtrl acts the main route for the app.


<h2>CRUD</h2>
<h3>Creating</h3>
<h4>Adding a new Lego Set</h4>
Users have the ability to add any Lego set by clicking the "New Set" link in the header. The user will then be ability to enter the necessary information.
For now, the user can input the collection name but the end goal is to provide a dropdown of the name of all the Lego collections
.

```
  create (req, res, next) {
    Product.create(req.body, (err, createProduct) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = createProduct
        next()
      }
    })
  },

```

<h3>Read</h3>
<h4>Reading a Lego Set</h4>
The user can view the individual product-set with the name of the set and collection. Within the view page, the user will be able, in the future, to view reviews from other users and make create their own reviews. 

```
  show(req, res, next) {
    Product.findById(req.params.id, (err, foundProducts) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'There is no set with that ID'
        })
      } else {
        res.locals.data.product = foundProducts
        next()
      }
    })
  }
}
```

Below is a piece of code commented out that would display the multiple reviews in the product-set show page.

```
show (req, res, next) {
  Product.findById({_id: req.params.id})
    .populate('review')
    .exec((err, foundProducts) => {
      if (err) {
        res.status(404).send({
        msg: err.message,
        output: 'There is no set with that ID'
        })
     } else {
       res.locals.data.product = foundProducts
       next()
     }
  })
}
```

<h3>Updating</h3>
<h4>Updating an existing Lego Set</h4>
The user will have the ability to update any existing product-set currently on the site. They can fill out all required fields with a link to a site for potential purchase and an image.

```
  update (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updateProduct) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = updateProduct
        next()
      }
    })
  },
```

<h3>Delete</h3>
<h4>Deleting a Lego Set</h4>
For now, the user will have the ability to delete the product from the show page. Ultimately, the user would only be able to delete their review(s) and the product will be locked. 

<img width="152" alt="Screenshot 2022-11-04 at 9 59 10 AM" src="https://user-images.githubusercontent.com/105724406/199990601-3cd4fccd-e759-4c4c-96e2-28150a7bdf85.png">

Below is the piece of code that allows the user to delete a product-set

```
  destroy (req, res, next) {
    Product.findByIdAndDelete(req.params.id, (err, deleteProduct) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = deleteProduct
        next()
      }
    })
  },
```

<h2>Ice Box Features</h2>
<ul>
  <li>Continue to fix the connection between the product-set and reviews for them</li>
  <li>Display multiple reviews on the product-set show page.</li>
  <li>Add an API to display more sets</li>
  <li>Create a wishlist</li>
  <li>Add more online stores where the user can buy the product via Amazon, Walmart, etc</li>
</ul>

<h2>Etc...</h2>
<h3>Trello</h3>
https://trello.com/b/NyWmJcSP/ga-project-2
<h3>Drawings!</h3>
For the links in the header, I decided to draw out the head and bricks and set them as the buttons background to give it a nice aethetic touch. 

<h3>Restful route table</h3> 
Below, the table is for product-set section:

| Action |        URL      | HTTP Verb | JSX View |     Mongoose Method       |
|--------|-----------------|-----------|----------|---------------------------|
| Index  |    /legoset/    |  GET      |Index.jsx |       Product.find()      |
|  Show  | /legoset/:id    |  GET      | Show.jsx |      Product.findById()   |
|   New  | /legoset/new    |  GET      | New.jsx  |            none           |
|Create  |    /legoset/    |  POST     |   none   |  Product.create(req.body) |
|  Edit  |/legoset/:id/edit|  GET      | Edit.jsx |     Product.findById()    |
|Update  | /legoset/:id    |  PUT      |  none    |Product.findByIdAndUpdate()|
|Delete  |    /legoset/    |  DELETE   |  none    |Product.findByIdAndDelete()| 
