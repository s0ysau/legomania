const React = require('react')
const Default = require('../layouts/Default')

class Show extends React.Component {
	render(){
		// A variable if needed
		const { theme, name, review, rating, isItFavorite, link, _id } = this.props.review
		return (
			// Code Block
			<Default title={`${name} page`} fruit={this.props.review}>
				Rating: {rating}<br/>
				Review: {review}<br/>
				{isItFavorite ? 'Listed as your favorite' : ''}<br />
				<a href={link}>Link to the Set</a><br />
				{review ? <a href={`/reviews/${_id}/edit`}>Edit {review.name}</a> : ''}<br />
				<form method='POST' action={`/reviews/${review._id}?_method=DELETE`}>
					<input type='submit' value={`Delete ${name}`}/>
				</form>
			</Default>
		)
	}
}

module.exports = Show