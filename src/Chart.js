var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Link = require('react-router').Link;
var strftime = require('strftime');
var NavBar = require('./NavBar');
var Header = require('./Header');

var allTodos = [];

var allGrouped = {};
var closedGrouped = {};
var openGrouped = {};

var categories = {};

var allValues = []
var closedValues = [];
var openValues = [];

function groupByDate(list, status) {
  var grouped = {};
  for (var i = 0; i < list.length; ++i) {
    var obj = list[i];
    if (obj.due in grouped) {
      if (status === '' || obj.status === status) {
        grouped[obj.due] += 1;
      }
    } else {
      if (status === '' || obj.status === status) {
        grouped[obj.due] = 1;
      }
    }
  }
  return grouped;
}

function getCategories(obj) {
  var categories = [];
  Object.keys(obj).forEach(function(key) {
    categories.push({label: key});
  });
  return categories;
}

function getValues(categories, obj) {
  var values = [];
  for (var i = 0; i < categories.length; ++i) {
    Object.keys(obj).forEach(function(key) {
      if (key == categories[i].label) {
        values.push({value: obj[key]});
      }
    });
    if (values.length < (i + 1)) {
      values.push({value: 0});
    }
  }
  return values;
}

var ColumnChart = React.createClass({
  render: function() {
    return (
        <div id='chart-container'>
          Chart lives here with Data: {allTodos}
        </div>
    )
  },

  componentDidMount: function() {
    this.loadData();

    FusionCharts.ready(function () {
      var chartData = {
        chart: {
          caption: 'Productivity Matters',
          subcaption: 'All vs Finished in Last 7 days',
          xaxisname: 'Date',
          yaxisname: 'Todos',
          theme: 'ocean'
        },
          categories: [{
            category: categories
          }],
          dataset: [{
            seriesname: 'All',
              data: allValues
            }, {
            seriesname: 'Finished',
              renderas: 'area',
              showvalues: '0',
              data: closedValues
          }]
      };

      var chartConfigs = {
        id: "all-finished-chart",
        renderAt: "all-finished-chart-container",
        type: "mscombi2d",
        width: 550,
        height: 400,
        dataFormat: "json",
        dataSource: chartData
      };

      ReactDOM.render(
        < react_fc.FusionCharts {...chartConfigs} />,
        document.getElementById("chart-container")

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
      allTodos = data['data'];

      allGrouped = groupByDate(allTodos, '');
      closedGrouped = groupByDate(allTodos, 'closed');
      openGrouped = groupByDate(allTodos, 'open');

      categories = getCategories(allGrouped);

      allValues = getValues(categories, allGrouped);
      closedValues = getValues(categories, closedGrouped);
      openValues = getValues(categories, openGrouped);
    });
  }
});

module.exports = ColumnChart;
