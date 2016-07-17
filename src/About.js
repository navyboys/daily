var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Link = require('react-router').Link;

var IssueRow = React.createClass({
  render: function() {
    return (
      <tr className='table_rows'>
        <td className={this.props.issue.id}>
          <button type="button" className="destroy" onClick={() =>
            $('.'+this.props.issue.id).toggleClass("removed") }>
            <span className="glyphicon glyphicon-remove" aria-hidden="false"></span>
          </button>
          <button type="button" className="markComplete" onClick={() =>
            $('.'+this.props.issue.id).toggleClass("completed") }>
            <span className="glyphicon glyphicon-ok" aria-hidden="false"></span>
          </button>
          <span className='table_cells'>{this.props.issue.title}</span>
        </td>
      </tr>
    )
  }
});

var IssueTable = React.createClass({
  render: function() {
    // console.log("Rendering issue table, num items:", this.props.issues.length);
    var issueRows = this.props.issues.map(function(issue) {
      return <IssueRow key={issue.id} issue={issue} />
    });
    return (
      <table className="table table-striped table-bordered table-condensed">
        <tbody>
          {issueRows}
        </tbody>
      </table>
    )
  }
});

var IssueList = React.createClass({
  getInitialState: function() {
    return {issues: []};
  },
  render: function() {
    return (
      <div className='issueList'>
        <IssueTable issues={this.state.issues}/>
      </div>
    )
  },

  componentDidMount: function() {
    this.loadData();
    console.log("IssueList(after mount): " + this.props.issues);
  },

  loadData: function() {
    $.ajax('http://api.github.com/issues?access_token=b7ed590823e029be3fd3233123cf138171a48075').done(function(data) {
      this.setState({issues: data});
    }.bind(this));
  }
});

module.exports = IssueList;

// FusionCharts.ready(function () {
//     var myDataSource = {
//         chart: {
//             caption: "Harry's SuperMart",
//             subCaption: "Top 5 stores in last month by revenue",
//             numberPrefix: "$",
//             theme: "ocean"
//         },
//         data: [{
//             label: "Bakersfield Central",
//             value: "880000"
//         }, {
//             label: "Garden Groove harbour",
//             value: "730000"
//         }, {
//             label: "Los Angeles Topanga",
//             value: "590000"
//         }, {
//             label: "Compton-Rancho Dom",
//             value: "520000"
//         }, {
//             label: "Daly City Serramonte",
//             value: "330000"
//         }]
//     };
//
//     var revenueChartConfigs = {
//         id: "revenue-chart",
//         renderAt: "revenue-chart-container",
//         type: "column2d",
//         width: 500,
//         height: 400,
//         dataFormat: "json",
//         dataSource: myDataSource
//     };
//
//     ReactDOM.render( < react_fc.FusionCharts {...revenueChartConfigs
//     }
//     />,
//     document.getElementById('chart-container')
//   );
// });
