const React = require('react')
const Default = require('../layouts/Default')

class New extends React.Component {
  render () {
    // A variable if needed
    return (
    // Code Block
      <Default title='Create a New Review'>
        <form method='POST' action='/legoblogs'>
          Theme: <input type='text' name='theme' placeholder='What is the theme set' /><br />
          Name: <input type='text' name='name' placeholder='What is the name of the set' /><br />
          Review: <textarea type='textarea' name='review' placeholder='Write your review' /><br />
          Rating: <input type='text' name='rating' placeholder='From 1-5'/><br />
          Favorite: <input type='checkbox' name='isItFavorite' /><br />
          Link <input type='text' name='link' /><br />
          <input type='submit' value='Submit your Review' />
        </form>
      </Default>
    )
  }
}

module.exports = New
