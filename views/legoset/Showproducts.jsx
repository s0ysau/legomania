const React = require('react')
const ProductLayout = require('../layouts/ProductLayout')

class Showproducts extends React.Component {
  render () {
    // A variable if needed
    const { product } = this.props;
    return (
    // Code Block
      <ProductLayout title={`${product.nameOfSet} | ${product.collectionName}`} product = {this.props.product}>
        <span><img className='product-image image-center' src={`${product.image}`}/></span>
          <span className='show-container show-body'>
            <div className='description-line'>
              <span className='type'>Description: </span> 
              <span className='entry'> {product.description}</span>
            </div>
            <div className='number-of-pieces-line'><span className='type'>Number of Pieces: </span><span className='entry'> {product.numberOfPieces}</span></div>
        </span><br/>
        <div className='review-section'>
          <span className='avgRating'>Average Rating: {product.review.rating}</span><br/>
          <a className='reviewBtn' href={`/legoset/${product._id}/reviews/New`}>Write a review</a>
          <span className='allReviews'>
            Reviews:{product.review.content}
          </span><br/>
        </div>
        <a href={`/legoset/${product._id}/edit`}>Edit {product.nameOfSet}</a><br />
        <a className='linkToLegoSite' href={product.link}>Link on Lego.com</a><br />
        <form method='POST' action={`/legoset/${product._id}?_method=DELETE`}>
          <input type='submit' className='deletebtn' value={`Delete ${product.nameOfSet}`} />
        </form>
      </ProductLayout>
    )
  }
}

module.exports = Showproducts
