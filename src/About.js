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
    $.ajax('http://api.github.com/issues?access_token=5ab8787034d275fa66e6f1a45bb7dc33850d34bb').done(function(data) {
      this.setState({issues: data});
    }.bind(this));
  }
});

module.exports = IssueList;
