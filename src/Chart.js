var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Link = require('react-router').Link;
var strftime = require('strftime');
var globalTodos = [];

var ColumnChart = React.createClass({
  render: function() {
    return (
      <div id='chart-container'>
        Chart lives here with Data: {globalTodos}
      </div>
    )
  },

  componentDidMount: function() {
    this.loadData();

    FusionCharts.ready(function () {
        var myDataSource = {
            "chart": {
                "caption": "Actual Revenues, Targeted Revenues & Profits",
                    "subcaption": "Last year",
                    "xaxisname": "Month",
                    "yaxisname": "Amount (In USD)",
                    "numberprefix": "$",
                    "theme": "ocean"
            },
                "categories": [{
                "category": [{
                    "label": "Jan"
                }, {
                    "label": "Feb"
                }, {
                    "label": "Mar"
                }, {
                    "label": "Apr"
                }, {
                    "label": "May"
                }, {
                    "label": "Jun"
                }, {
                    "label": "Jul"
                }, {
                    "label": "Aug"
                }, {
                    "label": "Sep"
                }, {
                    "label": "Oct"
                }, {
                    "label": "Nov"
                }, {
                    "label": "Dec"
                }]
            }],
                "dataset": [{
                "seriesname": "Actual Revenue",
                    "data": [{
                    "value": "16000"
                }, {
                    "value": "20000"
                }, {
                    "value": "18000"
                }, {
                    "value": "19000"
                }, {
                    "value": "15000"
                }, {
                    "value": "21000"
                }, {
                    "value": "16000"
                }, {
                    "value": "20000"
                }, {
                    "value": "17000"
                }, {
                    "value": "25000"
                }, {
                    "value": "19000"
                }, {
                    "value": "23000"
                }]
            }, {
                "seriesname": "Profit",
                    "renderas": "area",
                    "showvalues": "0",
                    "data": [{
                    "value": "4000"
                }, {
                    "value": "5000"
                }, {
                    "value": "3000"
                }, {
                    "value": "4000"
                }, {
                    "value": "1000"
                }, {
                    "value": "7000"
                }, {
                    "value": "1000"
                }, {
                    "value": "4000"
                }, {
                    "value": "1000"
                }, {
                    "value": "8000"
                }, {
                    "value": "2000"
                }, {
                    "value": "7000"
                }]
            }]
        };

        var chartConfigs = {
            id: "revenue-profits-chart",
            renderAt: "revenue-profits-chart-container",
            type: "mscombi2d",
            width: 600,
            height: 400,
            dataFormat: "json",
            dataSource: myDataSource
        };

        React.render( < react_fc.FusionCharts {...chartConfigs
        }
        />,
            document.getElementById("chart-container")
        );
    });
    },

  //   FusionCharts.ready(function () {
  //     var dataSource = {
  //       chart: {
  //         caption: 'Productivity Matters',
  //         subCaption: 'Total vs Finished in last 7 days',
  //         theme: 'ocean'
  //       },
  //       data: [{
  //         label: globalTodos[0].due,
  //         value: '5'
  //       }, {
  //         label: globalTodos[1].due,
  //         value: '8'
  //       }]
  //     };
  //
  //     var revenueChartConfigs = {
  //       id: "revenue-chart",
  //       renderAt: "revenue-chart-container",
  //       type: "column2d",
  //       width: 500,
  //       height: 400,
  //       dataFormat: "json",
  //       dataSource: dataSource
  //     };
  //
  //     ReactDOM.render(
  //       < react_fc.FusionCharts {...revenueChartConfigs} />,
  //       document.getElementById('column-chart')
  //     );
  //   });
  // },

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
