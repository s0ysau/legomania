const React = require('react')
const ProductLayout = require('../layouts/ProductLayout')

class Newproducts extends React.Component {
  render () {
    // A variable if needed
    return (
    // Code Block
      <ProductLayout title='Add a New Lego Set'>
        <form method='POST' action='/legoproducts'>
          <span className='show-container'>
            <span className='type'>Name:</span><span className='entry'><input type='text' name='nameOfSet' placeholder='Name of the set' /></span>
            <span className='type'>Collection:</span><span className='entry'><input type='text' name='collectionName' placeholder='Name of the collection' /></span>
            <span className='type'>Description:</span><span className='entry'><textarea type='textarea' name='description' placeholder='Description' /></span>
            <span className='type'># of pieces:</span><span className='entry'><input type='text' name='numberOfPieces' placeholder='# of pieces in this set'/></span>
            <span className='type'>Link</span><span className='entry'><input type='text' name='link' /></span>
            <span className='type'>Image</span><span className='entry'><input type='text' name='image' /></span>
            <input type='submit' value='Submit' />
          </span>
        </form>
      </ProductLayout>
    )
  }
}

module.exports = Newproducts
