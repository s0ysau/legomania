const React = require('react')

class Default extends React.Component {
  render (){
    // constant 
    const { review, title } = this.props
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/css/app.css"></link> 
										// this is for css styling
          <title>{title}</title>         
        </head>
        <nav>
          <a></a>
          <a></a>
        </nav>
        <body>
          <h1>{title}</h1>
          {this.props.children}
        </body>
        <footer>
          <p>Created by Jerrick Lloyd C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href='https://github.com/s0ysau'>GitHub</a> &nbsp;&nbsp;&nbsp;
          <a href='https://www.linkedin.com/in/jerrick-lloyd-carandang/'>LinkedIn</a>
          </p>        
        </footer>
      </html>
    )
  }
}

module.exports = Default