const React = require('react')
const ProductLayout = require('../layouts/ProductLayout')

class Login extends React.Component {
  render () {
    return (
      <ProductLayout title="Login to your Account">
        <h1>Login In to get your Brick on!</h1>
        <form action='/user/login' method='POST'>
          <fieldset>
            <legend>New User</legend>
            <label>USERNAME: <input type='text' name='username' required /> </label>
            <label>PASSWORD: <input type='password' name='password' required />
            </label>
            <input type='submit' value='Login Account' />
          </fieldset>
        </form>
      </ProductLayout>
    )
  }
}

module.exports = Login