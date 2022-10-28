const React = require('react')
const Default = require('../layouts/Default')

class Favorite extends React.Component {
	render(){
		// A variable if needed
    const { reviews } = this.props
		return (
			// Code Block
      <Default title='Your list of favorite sets'>
      <ul>
        {
          reviews.map((reviewone) => {
            const { theme, name, review, rating, isItFavorite, _id } = reviewone
            return(
              <li>
                {isItFavorite? `${name} from the ${theme} collection` : '' }
              </li>
            )
          })
        }
      </ul>
      </Default>
		)
	}
}

module.exports = Favorite