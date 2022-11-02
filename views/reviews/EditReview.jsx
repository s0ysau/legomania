const React = require('react')
const Default = require('../layouts/Default')

class Edit extends React.Component {
  render () {
    // A variable if needed
    const { headline, content, rating, product, _id } = this.props.review
    return (
    // Code Block
      <Default title={`Edit your ${product.nameOfSet} review`} review={this.props.review}>
        <form method='POST' action={`/legoreviews/${_id}?_method=PUT`}>
          Headline: <input type='text' name='theme' defaultValue={headline} /><br />
          Review: <textarea type='textarea' name='name' defaultValue={content} /><br />
          Rating: <input name='rating' defaultValue={rating}/><br />
          <input type='submit' value='Edit your Review' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit
