const React = require('react')

class Default extends React.Component {
  render (){
    // constant 
    const { review, title } = this.props
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/css/app.css"></link> 
          <title>{title}</title>         
        </head>
        <nav>
          <a className='headerbtn home' href='/reviews'>HOME</a>
          <a className='headerbtn newReview' href='/reviews/New'>NEW REVIEW</a>
          <a className='headerbtn legoLink' href='https://www.lego.com/en-us'>LEGO.COM</a>
        </nav>
        <main>
          <body>
            <h1 className='title'>{title}</h1>
            <p>{this.props.children}</p>
          </body>
        </main>
        <footer>
          <p>Created by Jerrick Lloyd C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className='github' href='https://github.com/s0ysau'>GitHub</a> &nbsp;&nbsp;&nbsp;
          <a className='linkedin' href='https://www.linkedin.com/in/jerrick-lloyd-carandang/'>LinkedIn</a>
          </p>        
        </footer>
      </html>
    )
  }
}

module.exports = Default