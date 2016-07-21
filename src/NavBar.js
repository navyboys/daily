import React, { PropTypes, Component } from 'react'

class NavBar extends Component {
  render() {
    return (
        <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href='/todos'>
                <img alt="Brand" src="./brand_img.png"/>
              </a>
              <p className="navbar-text">daily</p>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a href="/">Home </a></li>
                <li><a href="/chart">Chart</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="/logout">Logout </a></li>
              </ul>
          </div>
        </div>
        </nav>
        </div>

    )}
}

export default NavBar
