const React = require('react')
const Default = require('../layouts/Default')

class Show extends React.Component {
  render () {
    // A variable if needed
    // const { theme, name, review, rating, isItFavorite, link, _id } = this.props.review
    const { headline, content, rating, product, _id } = reviewone
    return (
    // Code Block
      <Default title={`${product.nameOfSet} | ${product.collectionName}`} review={this.props.review}>
        <span className='show-container'>
        <span className='entry'>{headline}</span>
          <span className='type'>Rating:</span><span className='entry'>{rating}</span>
          <span className='type'>Review:</span><span className='entry'>{content}</span>
        </span><br/>
        <a className='linkToLegoSite' href={link}>Link to LEGO.com</a><br />
        {review ? <a href={`/legoreviews/${_id}/edit`}>Edit {review.name}</a> : ''}<br />
        <form method='POST' action={`/legoreviews/${_id}?_method=DELETE`}>
          <input type='submit' value={`Delete ${nameOfSet} Review`} />
        </form>
      </Default>
    )
  }
}

module.exports = Show
