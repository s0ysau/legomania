<h1>LEGOMANIA</h1>
<p>The purpose of this site is to rate and review Lego sets by using CRUD to create, read, update and delete review posts</p>

<h2>Home Page</h2>
![original wireframe](/README/original_wireframe.png)

Above is the basic setup for the main page of the site. For now, the six boxes are potential Lego set pics. 

To simplify the scale, I want to start with one theme collection and expand using a API. 

☐ Screenshot(s): Images of your actual app.

☐ Technologies Used: List of the technologies used, e.g., JavaScript, HTML, CSS...

☐ Getting Started: In this section include the link to your deployed app and any instructions you deem important.

☐ Next Steps: Planned future enhancements (icebox items).

☐ Restful route table

| Action |       URL      | HTTP Verb | JSX View |     Mongoose Method      |
|--------|----------------|-----------|----------|--------------------------|
| Index  |    /review/    |  GET      |Index.jsx |       Review.find()      |
|  Show  | /review/:id    |  GET      | Show.jsx |      Review.findById()   |
|   New  | /review/new    |  GET      | New.jsx  |           none           |
|Create  |    /review/    |  POST     |   none   |  Review.create(req.body) |
|  Edit  |/review/:id/edit|  GET      | Edit.jsx |      Review.findById()   |
|Update  | /review/:id    |  PUT      |  none    |Review.findByIdAndUpdate()|
|Delete  |    /review/    |  DELETE   |  none    |Review.findByIdAndDelete()|
