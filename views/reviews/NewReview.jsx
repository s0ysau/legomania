const React = require('react')
// const Default = require('../layouts/Default')
const ProductLayout = require('../layouts/ProductLayout')
const Product = require('../../models/products')

class NewReview extends React.Component {
  render () {
    // A variable if needed
    // const { nameOfSet, image, _id } = this.props.product;
    return (
    // Code Block
      <ProductLayout title={`Create a New Review for ${Product.nameOfSet}`}>
        <span>{Product.nameOfSet}</span>
        <span><img className='product-image' src={`${Product.image}`}/></span>
        <form method='POST' action={`/legoset/${Product._id}/review`}>
          <span className='show-container'>
            <span className='type'>Overall Rating:</span>
              <span className='entry'>



              
              {/* <div className="rating rating2" name='rating'>
                <input type='checkbox' name='rating' className='1'></input>
                <a href="#1" value='1' title="Give 1 star">★</a>
                <input type='checkbox' name='rating' className='2'></input>
                <a href="#2" value='2' title="Give 2 stars">★</a>
                <input type='checkbox' name='rating' className='3'></input>
                <a href="#3" value='3' title="Give 3 stars">★</a>
                <input type='checkbox' name='rating' className='4'></input>
                <a href="#4" value='4' title="Give 4 stars">★</a>
                <input type='checkbox' name='rating' className='5'></input>
                <a href="#5" value='5' title="Give 5 stars">★</a>
              </div> */}
              <span className='star-ratings'>
                <span className='feedback'>
                  <div class="rating">
                    <input type="radio" name="rating" className="5" title="Give 5 star" value='5'/>
                    <label></label>
                    <input type="radio" name="rating" className="4" title="Give 4 star" value='4'/>
                    <label></label>
                    <input type="radio" name="rating" className="3" title="Give 3 star" value='3'/>
                    <label></label>
                    <input type="radio" name="rating" className="2" title="Give 3 star" value='2'/>
                    <label></label>
                    <input type="radio" name="rating" className="1" title="Give 1 star" value='1'/>
                    <label></label>
                  </div>
                </span>
              </span>

              </span>
            <span className='type'>Write a Headline:</span>
              <input type='text' name='headline' className='entry' placeholder='What is the most important to know?'/>
            <span className='type'>Write your review:</span><textarea type='textarea' name='content' className='entry' placeholder='What did you like or dislike? Was it hard to assemble?'/>
          </span>
          <input type='submit' value='Submit your Review' />
        </form>
      </ProductLayout>
    )
  }
}

module.exports = NewReview
