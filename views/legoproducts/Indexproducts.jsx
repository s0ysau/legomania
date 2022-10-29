const React = require('react')
const ProductLayout = require('../layouts/ProductLayout')

class Indexproducts extends React.Component {
  render () {
    const { products } = this.props;
    return (
    // Code Block
      <ProductLayout title='Lego Products Page'>
        <div className='container-header'>
          {
						products.map((item) => {
            const { nameOfSet, collectionName, image, _id } = item
            return (
              <div key={_id}>
                <a href={`/legoproducts/${_id}`}>
                <span><img className='product-image index-image' src={`${image}`}/></span><br/>
                  The {nameOfSet} Set - {collectionName} Collection
                </a>
              </div>
            )
						})
					}
        </div>
      </ProductLayout>
    )
  }
}

module.exports = Indexproducts
