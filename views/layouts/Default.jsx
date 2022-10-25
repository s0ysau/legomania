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
          <a className='headerbtn' href='/reviews'>HOME</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className='headerbtn' href='/reviews/New'>NEW REVIEW</a>
        </nav>
        <body>
          <h1>{title}</h1>
          {this.props.children}
        </body>
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