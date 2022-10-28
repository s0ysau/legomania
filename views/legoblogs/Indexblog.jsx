const React = require('react')
const Default = require('../layouts/Default')

class Indexblog extends React.Component {
  render () {
    const { reviews } = this.props
    return (
    // Code Block
      <Default title='Your Lego blogs Page'>
        <ul>
          {
						reviews.map((reviewone) => {
            const { theme, name, review, rating, _id } = reviewone
            return (
              <li key={_id}>
                <a href={`/legoblog/${_id}`}>
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

module.exports = Indexblog
