import React from 'react'

var date = new Date();
export default React.createClass({
  render: function() {
    return (
      <div>
        <Datetime defaultValue={date} open={false}/>
      </br>
        <h1>Tweet</h1>
      </div>
    )
    }
  })
