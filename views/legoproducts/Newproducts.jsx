const React = require('react')
const ProductLayout = require('../layouts/ProductLayout')

class Newproducts extends React.Component {
  render () {
    // A variable if needed
    const handleOpen = () => {
      setOpen(!open)
    };
    const handleDropOne = () => {
      // code
      setOpen(false)
    }
    const handleDropTwo = () => {
      // code 
      setOpen(false)
    }
    return (
    // Code Block
      <ProductLayout title='Add a New Lego Set'>
        <form method='POST' action='/legoproducts'>
          <span className='show-container'>
            <span className='type'>Name:</span><input type='text' name='nameOfSet' className='entry' placeholder='Name of the set' />



            <span className='type'>Collection:</span>
            
              {/* <div className='dropdown'>
                <select onClick={handleOpen} name="collectionName" className='dropBtn'>Collection</select>
                {open ? (
                  <ul className='dropdown-content'>
                    <li className='content-item'>
                      <button onClick={handleDropOne} value='Architecture'>
                        Architecture</button>
                    </li>
                    <li className='content-item'>
                      <button onClick={handleDropTwo}value='Star Wars'>Star Wars</button>
                    </li>
                  </ul>) : null}
              </div> */}
            <input type='text' name='collectionName' className='entry' placeholder='Name of the collection' />



            <span className='type'>Description:</span><textarea type='textarea' name='description' className='entry' placeholder='Description' />
            <span className='type'># of pieces:</span><input type='text' name='numberOfPieces' className='entry' placeholder='# of pieces in this set'/>
            <span className='type'>Link</span><input type='text' name='link' className='entry'/>
            <span className='type'>Image</span><input type='text' name='image' className='entry'/>
            <input type='submit' value='Submit' />
          </span>
        </form>
      </ProductLayout>
    )
  }
}

module.exports = Newproducts
