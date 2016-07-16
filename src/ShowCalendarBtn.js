import React from 'react'
import ReactDOM from 'react-dom'

var date = new Date();

var ShowCalendarBtn = React.createClass({
  showCalendar: function(){
    $("div.calendar").toggleClass("rdtOpen");

  },
  render: function() {
    return (
      <div>
        <button type="button" className='showCalendar' onClick={ this.showCalendar }>
          <span className="glyphicon glyphicon-hand-down" aria-hidden="false"></span>
        </button>

      </div>
    )
  }
})
module.exports = ShowCalendarBtn;
