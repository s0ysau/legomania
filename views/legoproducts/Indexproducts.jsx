const React = require('react')
const ProductLayout = require('../layouts/ProductLayout')

class Indexproducts extends React.Component {
  render () {
    const { product } = this.props;
    return (
    // Code Block
      <ProductLayout title='Lego Products Page'>
        <ul>
          {
						product.map((item) => {
            const { nameOfSet, collectionName, image, _id } = item
            return (
              <li key={_id}>
                <a href={`/legoproducts/${_id}`}>
                <span><img className='product-image index-image' src={`${image}`}/></span><br/>
                  The {nameOfSet} Set - {collectionName} Collection
                </a>
              </li>
            )
						})
					}
        </ul>
      </ProductLayout>
    )
  }
}

module.exports = Indexproducts
