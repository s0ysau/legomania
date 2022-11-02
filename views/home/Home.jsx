const React = require('react')

class Home extends React.Component {
  render() {
    return(
      <>
        <head>
        <link rel='stylesheet' href='/css/home.css' />
        <title>Get Bricky</title>
        </head>
        <nav>
          <a className='headerbtn product-page' href='/legoproducts'>PRODUCT PAGE</a>
          <a className='headerbtn legoLink' href='https://www.lego.com/en-us'>LEGO.COM</a>
        </nav>
        <main>
          <body>
            <h1>Get your Brick On!</h1>
            <p>Welcome! Here you can view different Lego sets and add your own sets</p>
          </body>
        </main>
        <footer>
          <p className='p-footer'>
            <span className='my-name'>Created by Jerrick Lloyd C</span>
            <a className='github personal-link' href='https://github.com/s0ysau'>
              <img className='image-logo github-logo' src='../images/github-logo.png'/>
            </a> &nbsp;&nbsp;&nbsp;
            <a className='linkedin personal-link' href='https://www.linkedin.com/in/jerrick-lloyd-carandang/'>
              <img className='image-logo linkedin-logo' src='../images/linkedin-logo.png'/>
            </a>
          </p>
        </footer>
      </>
    )
  }
}

module.exports = Home