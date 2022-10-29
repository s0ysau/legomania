const React = require('react')
const Default = require('../layouts/Default')

class Show extends React.Component {
  render () {
    // A variable if needed
    const { theme, name, review, rating, isItFavorite, link, _id } = this.props.review
    return (
    // Code Block
      <Default title={`${name} Lego ${theme} Review`} review={this.props.review}>
        <span className='show-container'>
          <span className='type'>Theme:</span><span className='entry'>{theme}</span>
          <span className='type'>Rating:</span><span className='entry'>{rating}</span>
          <span className='type'>Review:</span><span className='entry'>{review}</span>
          <span className='type'>Favorite:</span><span className='entry'>{isItFavorite ? 'Listed as your favorite' : 'Not listed as a favorite'}</span>
        </span><br/>
        <a className='linkToLegoSite' href={link}>Link to LEGO.com</a><br />
        {review ? <a href={`/legoreviews/${_id}/edit`}>Edit {review.name}</a> : ''}<br />
        <form method='POST' action={`/legoreviews/${_id}?_method=DELETE`}>
          <input type='submit' value={`Delete ${name}Review`} />
        </form>
      </Default>
    )
  }
}

module.exports = Show
