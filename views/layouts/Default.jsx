const React = require('react')

class Default extends React.Component {
  render (){
    // constant 
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
      </html>
    )
  }
}

module.exports = Default