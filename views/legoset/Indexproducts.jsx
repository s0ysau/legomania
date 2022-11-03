const React = require('react')
const ProductLayout = require('../layouts/ProductLayout')

class Indexproducts extends React.Component {
  render () {
    const { products } = this.props;
    return (
    // Code Block
      <ProductLayout title='Lego Sets'>
        <div className='container-main'>
          {
						products.map((item) => {
            const { nameOfSet, image, _id } = item
            return (
              <div key={_id}>
                <a href={`/legoset/${_id}`}>
                <span><img className='product-image index-image' src={`${image}`}/></span><br/>
                <span className='product-name-index'>{nameOfSet}</span>
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
