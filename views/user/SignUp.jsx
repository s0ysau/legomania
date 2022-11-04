const React = require('react')
const ProductLayout = require('../layouts/ProductLayout')


class SignUp extends React.Component {
  render () {
    return (
      <ProductLayout title="Sign Up">
        <h1>Sign Up to get your Brick on!</h1>
        <form action='/user/signup' method='POST'>
          <fieldset>
            <legend>New User</legend>
            <label>USERNAME: <input type='text' name='username' required /> </label>
            <label>PASSWORD: <input type='password' name='password' required />
            </label>
            <input type='submit' value='Create Account' />
          </fieldset>
        </form>
      </ProductLayout>
    )
  }
}

module.exports = SignUp