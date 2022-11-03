const React = require('react')
const ProductLayout = require('../layouts/ProductLayout')

class Editproducts extends React.Component {
  render () {
    // A variable if needed
    const { nameOfSet, collectionName, description, numberOfPieces, link, image, _id } = this.props.product
    return (
    // Code Block
      <ProductLayout title={`Edit ${nameOfSet} Set`} product={this.props.product}>
        <form method='POST' action={`/legoset/${_id}?_method=PUT`}>
          <div className='show-container'>
            <span className='type'>Name:</span><input type='text' name='nameOfSet' className='entry' defaultValue={nameOfSet} />
            <span className='type'>Collection:</span><input type='text' name='collectionName' className='entry' defaultValue={collectionName} />
            <span className='type'>Description:</span><textarea type='textarea' name='description' className='entry' defaultValue={description} />
            <span className='type'># of pieces:</span><input type='number' name='numberOfPieces' className='entry' defaultValue={numberOfPieces}/>
            <span className='type'>Link:</span><input type='text' name='link' className='entry' defaultValue={link} />
            <span className='type'>Image:</span><input type='text' name='image' className='entry' defaultValue={image} />
          </div>
          <input type='submit' value='Edit Lego Set' />
        </form>
      </ProductLayout>
    )
  }
}

module.exports = Editproducts