const React = require('react')
const Default = require('../layouts/Default')

class Show extends React.Component {
	render(){
		// A variable if needed
		const { theme, name, review, rating, isItFavorite } = this.props.review
		return (
			// Code Block
			<Default title={`${name} page`} fruit={this.props.review}>
				<p>Rating: {rating}</p><br/>
				<p>Review: {review}</p><br/>
				<p>{isItFavorite ? 'Listed as your favorite' : ''}</p>
			</Default>
		)
	}
}

module.exports = Show