const React = require('react')
const Default = require('../layouts/Default')

class Showproducts extends React.Component {
  render () {
    // A variable if needed
    const { nameOfSet, collectionName, description, numberOfPieces, link, _id } = this.props.product
    return (
    // Code Block
      <Default title={`${nameOfSet} | ${collectionName}`} product = {this.props.product}>
        <span className='show-container'>
          <span className='type'>Name:</span><span className='entry'>{nameOfSet}</span>
          <span className='type'>Collection:</span><span className='entry'>{collectionName}</span>
          <span className='type'>Description:</span><span className='entry'>{description}</span>
          <span className='type'>Number of Pieces:</span><span className='entry'>{numberOfPieces}</span>
        </span><br/>
        {product ? <a href={`/legoproducts/${_id}/edit`}>Edit {nameOfSet}</a> : ''}<br />
        <a className='linkToLegoSite' href={link}>Link on Lego.com</a><br />
        <form method='POST' action={`/legoproducts/${_id}?_method=DELETE`}>
          <input type='submit' value={`Delete ${nameOfSet}`} />
        </form>
      </Default>
    )
  }
}

module.exports = Showproducts
