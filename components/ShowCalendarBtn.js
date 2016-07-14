import React from 'react'
import ReactDOM from 'react-dom'

var date = new Date();
var ShowCalendarBtn = React.createClass({
  showCalendar: function(){
    console.log("hello there now")

  },
  render: function() {
    return (
      <div>
        <button type="button" className='showCalendar' onClick={ this.showCalendar }> hello </button>

      </div>
    )
  }
})
module.exports = ShowCalendarBtn;
