import React from 'react'
var Datetime = require('react-datetime');
var date = new Date();
var moment = require('moment');

export default React.createClass({
  getInitialState: function() {
    return {
      selectedDate: moment().format('YYYY-MM-DD')
    };
    console.log("date init "+this.selectedDate);
  },
  render: function() {
    return (
      <div>
        <Datetime className="calendar" defaultValue={date} open={false} closeOnSelect={true} viewMode={'days'} onChange={this.handleDate}/>
      </div>
      )
  },

  handleDate: function(date){
    var dateSelected = moment(date).format('YYYY-MM-DD');
    this.setState({
      selectedDate: dateSelected
    });
    console.log("see the date state "+this.state.selectedDate);
    this.props.dateFilter(dateSelected);
  }

})
