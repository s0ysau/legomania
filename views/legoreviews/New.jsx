const React = require('react')
const Default = require('../layouts/Default')

class New extends React.Component {
  render () {
    // A variable if needed
    return (
    // Code Block
      <Default title='Create a New Review'>
        <form method='POST' action='/legoreviews'>
          Theme: <input type='text' name='theme' placeholder='What is the theme set' /><br />
          Name: <input type='text' name='name' placeholder='What is the name of the set' /><br />
          Review: <textarea type='textarea' name='review' placeholder='Write your review' /><br />
          Rating: <div className="rating rating2">
                    <input type='radio' name='rating' className='1' />
                    <a href="#1" value='1' title="Give 1 star">★</a>
                    <input type='radio' name='rating' className='2' />
                    <a href="#2" value='2' title="Give 2 stars">★</a>
                    <input type='radio' name='rating' className='3' />
                    <a href="#3" value='3' title="Give 3 stars">★</a>
                    <input type='radio' name='rating' className='4' />
                    <a href="#4" value='4' title="Give 4 stars">★</a>
                    <input type='radio' name='rating' className='5' />
                    <a href="#5" value='5' title="Give 5 stars">★</a>
                  </div> 
          {/* <input type='text' name='rating' placeholder='From 1-5'/><br /> */}
          Favorite: <input type='checkbox' name='isItFavorite' /><br />
          Link <input type='text' name='link' /><br />
          <input type='submit' value='Submit your Review' />
        </form>
      </Default>
    )
  }
}

module.exports = New
