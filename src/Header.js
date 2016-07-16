import React, { PropTypes, Component } from 'react'
// import TodoTextInput from './TodoTextInput'

var moment = require('moment')

var today = moment().format('dddd');
class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1>{today}</h1>
        </header>
      </div>

    )}
}

export default Header
