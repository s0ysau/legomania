const React = require('react')
const ProductLayout = require('../layouts/ProductLayout')

class Editproducts extends React.Component {
  render () {
    // A variable if needed
    const { nameOfSet, collectionName, description, numberOfPieces, link, image, _id } = this.props.product
    return (
    // Code Block
      <ProductLayout title={`${nameOfSet}'s Product Edit`} review={this.props.product}>
        <form method='POST' action={`/legoproducts/${_id}?_method=PUT`}>
          Name: <input type='text' name='nameOfSet' defaultValue={nameOfSet} /><br />
          Collection: <input type='text' name='collectionName' defaultValue={collectionName} /><br />
          Description: <textarea type='textarea' name='description' defaultValue={description} /><br />
          # of pieces: <input type='number' name='numberOfPieces' defaultValue={numberOfPieces}/><br />
          Link: <input type='text' name='link' defaultValue={link} /><br />
          Image: <input type='text' name='image' defaultChecked={image} /><br/>
          <input type='submit' value='Edit your Review' />
        </form>
      </ProductLayout>
    )
  }
}

module.exports = Editproducts