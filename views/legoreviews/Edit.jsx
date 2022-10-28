const React = require('react')
const Default = require('../layouts/Default')

class Edit extends React.Component {
  render () {
    // A variable if needed
    const { theme, name, review, rating, isItFavorite, link, _id } = this.props.review
    return (
    // Code Block
      <Default title={`${name}'s Review Edit Section`} review={this.props.review}>
        <form method='POST' action={`/legoreviews/${_id}?_method=PUT`}>
          Theme: <input type='text' name='theme' defaultValue={theme} /><br />
          Name: <input type='text' name='name' defaultValue={name} /><br />
          Review: <textarea type='textarea' name='review' defaultValue={review} /><br />
          Rating: <input type='text' name='rating' defaultValue={rating}/><br />
          Favorite: <input type='checkbox' name='isItFavorite' defaultValue={isItFavorite}/><br />
          Link <input type='text' name='link' defaultValue={link} /><br />
          <input type='submit' value='Edit your Review' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit
