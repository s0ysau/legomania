const React = require('react')
const Default = require('../layouts/Default')

class Edit extends React.Component {
	render(){
		// A variable if needed
		const { theme, name, review, rating, isItFavorite, _id } = this.props.review
		return (
			// Code Block
			<Default title={`${name}'s Review Edit Section`} review={this.props.review}>
				<form method='POST' action={`/reviews/${_id}?_method=PUT`}>
					Theme: <input type='text' name='theme' placeholder='What is the theme set'/><br/>
					Name: <input type='text' name='name' placeholder='What is the name of the set'/><br/>
					Review: <input type='textarea' name='review' placeholder='Write your review'/><br/>
					Rating: <input type='text' name='rating'/><br/>
					Favorite: <input type='checkbox' name='isItFavorite'/><br/>
					<input type='submit' value='Edit your Review'/>
				</form>
			</Default>
		)
	}
}

module.exports = Edit