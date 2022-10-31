const React = require('react')
const Default = require('../layouts/Default')

class New extends React.Component {
  render () {
    // A variable if needed
    const { nameOfSet, collectionName, image } = this.props.review
    return (
    // Code Block
      <Default title='Create a New Review'>
        <span className='product-image'>{image}</span>
        <form method='POST' action='/legoreviews'>
          <span className='show-container'>
            <span className='type'>Name:</span><span className='entry'>{nameOfSet}</span>
            <span className='type'>Theme:</span><span className='entry'>{collectionName}</span>
            <span className='type'>Review:</span><span className='entry'><textarea type='textarea' name='review' placeholder='Write your review' /></span>
            <span className='type'>Rating:</span><span className='entry'><div className="rating rating2">
                      <input type='radio' name='rating' className='1' />
                      <a href="#1" value='1' title="Give 1 star">★</a>
                      <input type='radio' name='rating' className='2' />
                      <a href="#2" value='2' title="Give 2 stars">★</a>
                      <input type='radio' name='rating' className='3' />
                      <a href="#3" value='3' title="Give 3 stars">★</a>
                      <input type='radio' name='rating' className='4' />
                      <a href="#4" value='4' title="Give 4 stars">★</a>
                      <input type='radio' name='rating' className='5' />
                      <a href="#5" value='5' title="Give 5 stars">★</a>
                    </div> </span>
            {/* <input type='text' name='rating' placeholder='From 1-5'/> */}
            <span className='type'>Favorite:</span><span className='entry'><input type='checkbox' name='isItFavorite' /></span>
          </span>
          <input type='submit' value='Submit your Review' />
        </form>
      </Default>
    )
  }
}

module.exports = New
