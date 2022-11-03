const React = require('react')
const Default = require('../layouts/Default')

class Index extends React.Component {
  render () {
    const { reviews, product } = this.props
    return (
    // Code Block
      <Default title='Your Lego Reviews Page'>
        <ul>
          {
						reviews.map((reviewone) => {
            const { headline, content, rating, product, _id } = reviewone
            return (
              <li key={_id}>
                <a href={`/legoreviews/${_id}`}>
                  The {product.nameOfSet} Set - {product.collectionName} Collection
                </a><br />
                Rating: {rating}<br />
                <span>{headline}</span>
                Review: {content}<br />
              </li>
            )
						})
					}
        </ul>
      </Default>
    )
  }
}

module.exports = Index
