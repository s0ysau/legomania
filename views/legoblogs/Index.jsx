const React = require('react')
const Default = require('../layouts/Default')

class Index extends React.Component {
  render () {
    const { reviews } = this.props
    return (
    // Code Block
      <Default title='Your Lego Blog Page'>
        <ul>
          {
						reviews.map((reviewone) => {
            const { theme, name, review, rating, _id } = reviewone
            return (
              <li key={_id}>
                <a href={`/legoblogs/${_id}`}>
                  The {name} Set - {theme} Collection
                </a><br />
                Rating: {rating}<br />
                Review: {review}<br />
              </li>
            )
						})
					}
        </ul>
      </Default>
    )
  }
}

module.exports = Index
