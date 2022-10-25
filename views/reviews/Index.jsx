const React = require('react')
const Default = require('../layouts/Default')

class Index extends React.Component {
	render(){
		const { reviews } = this.props
		return (
			// Code Block
			<Default title='Your Reviews Page'>
				<ul>
					{
						reviews.map((reviewone) => {
							const { theme, name, review, rating, isItFavorite } = reviewone
							return(
								<li key={reviewone._id}>
									<a href={`/reviews/${reviewone._id}`}>
										The {name} set from the {theme} collection
									</a><br/>
									<p>{rating}</p>
									<p>{review}</p>
									{
										isItFavorite ? 'You listed this set as your favorite' : '' 

									}<br/>
									<form method='POST' action={`/reviews/${reviewone._id}?_method=DELETE`}>
										<input type='submit' value={`Delete ${name}`}/>
									</form>
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