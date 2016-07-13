import React from 'react'
var moment = require('moment')
var Datetime = require('react-datetime');
var date = new Date();
// var day = moment().format('dddd MMM Do YY');
var day = moment().format('dddd');
export default React.createClass({
  render: function() {
    return (
      <div>
        <Datetime className="pageHeader" defaultValue={date} open={false}/>
        <h1>{day}</h1>
      </div>
      )
    }
  })
