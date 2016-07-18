import React from 'react'
var Datetime = require('react-datetime');
var date = new Date();
var moment = require('moment');

export default React.createClass({
  render: function() {
    return (
      <div>
        <Datetime className="calendar" defaultValue={date} open={false} closeOnSelect={true} onChange={this.handleDate}/>
      </div>
      )
  },

  handleDate: function(date){
    var dateSelected = moment(date).format('YYYY-MM-DD');
    this.props.dateFilter(dateSelected);
  }

})
