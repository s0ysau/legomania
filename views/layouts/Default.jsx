const React = require('react')

class Default extends React.Component {
  render () {
    // constant
    const { review, title } = this.props
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
          <title>{title}</title>
        </head>
        <nav>
          <a className='headerbtn lego-head'></a>
          <a className='headerbtn home' href='/home'>HOME</a>
          <a className='headerbtn newReview' href='/reviews/New'>NEW REVIEW</a>
          <a className='headerbtn product-home' href='/legoset'>SETS</a>
          <a className='headerbtn legoLink' href='https://www.lego.com/en-us'>LEGO.COM</a>
        </nav>
        <main>
          <body>
            <h1 className='title'>{title}</h1>
            <p>{this.props.children}</p>
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
      </html>
    )
  }
}

module.exports = Default
