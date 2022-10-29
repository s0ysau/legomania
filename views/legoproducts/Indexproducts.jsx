const React = require('react')
const Default = require('../layouts/Default')

class Indexproducts extends React.Component {
  render () {
    const { product } = this.props;
    return (
    // Code Block
      <Default title='Lego Products Page'>
        <ul>
          {
						product.map((item) => {
            const { nameOfSet, collectionName, link, _id } = item
            return (
              <li key={_id}>
                <a href={`/legoproducts/${_id}`}>
                  The {nameOfSet} Set - {collectionName} Collection
                </a><br />
                <a href={link}>Link to Lego.com</a>
              </li>
            )
						})
					}
        </ul>
      </Default>
    )
  }
}

module.exports = Indexproducts
