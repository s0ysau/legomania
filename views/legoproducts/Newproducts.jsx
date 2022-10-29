const React = require('react')
const Default = require('../layouts/Default')

class Newproducts extends React.Component {
  render () {
    // A variable if needed
    return (
    // Code Block
      <Default title='Add a New Lego Set'>
        <form method='POST' action='/legoproducts'>
          Name: <input type='text' name='nameOfSet' placeholder='What is the name of the set' /><br />
          Collection: <input type='text' name='collectionName' placeholder='What is the name of the collection' /><br />
          Review: <textarea type='textarea' name='description' placeholder='Description' /><br />
          # of pieces: <input type='text' name='numberOfPieces' placeholder='# of pieces in this set'/><br/>
          Link <input type='text' name='link' /><br />
          <input type='submit' value='Submit' />
        </form>
      </Default>
    )
  }
}

module.exports = Newproducts
