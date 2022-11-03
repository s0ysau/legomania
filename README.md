<h1>Get Your Brick On</h1>
<p>The purpose of this site is to rate and review Lego sets by using CRUD to create, read, update and delete Lego sets and review posts</p>

<h2>Wireframe</h2>
<h3>Product Page</h3>

![Page1](public/Readme/product_page_WF.png)

<h3>Show individual product</h3>

![Page1](public/Readme/single_product_page.png)

<h3>Edit individual product</h3>

![Page1](public/Readme/edit_product_pg.png)

<h2>Organization</h2>
There are two main scetions of the site: A Product section to display collections of Lego sets and a Review section to post reviews and ratings about the lego set. 

The project is organized by the MVC format. In the project, you will find it divided into three folders: 

<ul>
<li>
```JSON
models
```
</li>
<li>
```JSON
views
```
</li>
<li>
```JSON
controllers
```
</li>
</ul>

<h3>Models</h3>
There are three models.js files.
<ul>
<li>db.js - For the database</li>
<li>products.js - For the Product information</li>
<li>reviews.js - For the Reviews </li>
</ul>
The table below is how the products and reviews schemas are set up 

|     products    |     reviews    |
|-----------------|----------------|
|   Name of set   |  Name of set   |
|    Name of the theme/collection  |
|   Description   |    content     |
| Number of pieces|     Rating     |
|      Link       |      Link      |

The Name of the set and the theme/collection along with the link are shared information that is currently separated. 

<h3>Controllers</h3>

The controller folder is divided into three sections: Data, Route, Views files for the Products, a Data file for Reviews and an authentication file. The setsRouteCtrl acts the main route for the app.

<h3>Views</h3>

The views section is divided into four (4) folders 
```JSON
views
├── home
│   ├── Home.jsx
├── layouts
│   ├── Default.jsx
│   ├── Productlayout.jsx
├── legoproducts
│   ├── Editproducts.jsx
│   ├── Indexproducts.jsx
│   ├── Newproducts.jsx
│   └── Showproducts.jsx
├── legoreviews
│   ├── Edit.jsx
│   ├── Index.jsx
│   ├── New.jsx
│   └── Show.jsx
```

<h2>CRUD</h2>
<h3>Creating</h3>

<h3>Read</h3>

<h3>Updating</h3>

<h3>Delete</h3>

<h2>Ice Box Features</h2>
<ul>
<li>Add an API to display more sets</li>
<li>Create a wishlist</li>
<li>Add more online stores where the user can buy the product via Amazon, Walmart, etc</li>
</ul>

 <!-- <h2>Home Page</h2>
![Alt text](/README/original_wireframe.png "Original wireframe") -->

<!-- Above is the basic setup for the main page of the site. For now, the six boxes are potential Lego set pics.

To simplify the scale, I want to start with one theme collection and expand using a API. 

☐ Screenshot(s): Images of your actual app.

☐ Technologies Used: List of the technologies used, e.g., JavaScript, HTML, CSS...

☐ Getting Started: In this section include the link to your deployed app and any instructions you deem important.

☐ Next Steps: Planned future enhancements (icebox items).

☐ Restful route table -->

<!-- | Action |       URL      | HTTP Verb | JSX View |     Mongoose Method      |
|--------|----------------|-----------|----------|--------------------------|
| Index  |    /review/    |  GET      |Index.jsx |       Review.find()      |
|  Show  | /review/:id    |  GET      | Show.jsx |      Review.findById()   |
|   New  | /review/new    |  GET      | New.jsx  |           none           |
|Create  |    /review/    |  POST     |   none   |  Review.create(req.body) |
|  Edit  |/review/:id/edit|  GET      | Edit.jsx |      Review.findById()   |
|Update  | /review/:id    |  PUT      |  none    |Review.findByIdAndUpdate()|
|Delete  |    /review/    |  DELETE   |  none    |Review.findByIdAndDelete()|   -->
