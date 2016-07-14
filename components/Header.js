import React, { PropTypes, Component } from 'react'
import TodoTextInput from './TodoTextInput'
import ShowCalendarBtn from './ShowCalendarBtn'
var moment = require('moment')

var today = moment().format('dddd');
class Header extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <div>
        <header className="header">
            <h1>{today}</h1>
            <TodoTextInput newTodo
                           onSave={this.handleSave.bind(this)}
                           placeholder="Add a task..." />
        </header>
        <ShowCalendarBtn />
      </div>
    )
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
