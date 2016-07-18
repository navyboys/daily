var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Link = require('react-router').Link;
var strftime = require('strftime');
var globalTodos = [];

var ColumnChart = React.createClass({
  render: function() {
    return (
      <div id='column-chart'>
        Chart lives here with Data: {globalTodos}
      </div>
    )
  },

  componentDidMount: function() {
    this.loadData();

    FusionCharts.ready(function () {
      var dataSource = {
        chart: {
          caption: 'Productivity Matters',
          subCaption: 'Total vs Finished in last 7 days',
          theme: 'ocean'
        },
        data: [{
          label: globalTodos[0].due,
          value: '5'
        }, {
          label: globalTodos[1].due,
          value: '8'
        }]
      };

      var revenueChartConfigs = {
        id: "revenue-chart",
        renderAt: "revenue-chart-container",
        type: "column2d",
        width: 500,
        height: 400,
        dataFormat: "json",
        dataSource: dataSource
      };

      ReactDOM.render(
        < react_fc.FusionCharts {...revenueChartConfigs} />,
        document.getElementById('column-chart')
      );
    });
  },

  loadData: function() {
    var user_id = 1;
    var yesterday = new Date();
    var oneWeekAgo = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    yesterday = strftime('%F', yesterday);
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    oneWeekAgo = strftime('%F', oneWeekAgo);

    $.ajax('/api/todos/?user_id='+user_id+'&from='+oneWeekAgo+'&to='+yesterday).done(function(data) {
      globalTodos = data['data'];
    });
  }
});

module.exports = ColumnChart;
