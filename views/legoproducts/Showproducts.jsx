const React = require('react')
const ProductLayout = require('../layouts/ProductLayout')

class Showproducts extends React.Component {
  render () {
    // A variable if needed
    const { nameOfSet, collectionName, description, numberOfPieces, link, image, _id } = this.props.product
    return (
    // Code Block
      <ProductLayout title={`${nameOfSet} | ${collectionName}`} productVar = {this.props.product}>
        <span><img className='product-image image-center' src={`${image}`}/></span>
          <span className='show-container show-body'>
            <div className='description-line'>
              <span className='type'>Description: </span> 
              <span className='entry'> {description}</span>
            </div>
            <div className='number-of-pieces-line'><span className='type'>Number of Pieces: </span> <span className='entry'> { numberOfPieces}</span></div>
        </span><br/>
        <div className='review-section'>
          <span>Average Rating: </span><br/>
          <a href={`/legoreviews/New`}>Create a review</a>
        </div>
        <a href={`/legoproducts/${_id}/edit`}>Edit {nameOfSet}</a><br />
        <a className='linkToLegoSite' href={link}>Link on Lego.com</a><br />
        <form method='POST' action={`/legoproducts/${_id}?_method=DELETE`}>
          <input type='submit' className='deletebtn' value={`Delete ${nameOfSet}`} />
        </form>
      </ProductLayout>
    )
  }
}

module.exports = Showproducts
