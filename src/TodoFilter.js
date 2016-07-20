var React = require('react');
var ReactDOM = require('react-dom');

var Panel = require('react-bootstrap/lib/Panel');
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Input = require('react-bootstrap/lib/Input');
var ButtonInput = require('react-bootstrap/lib/ButtonInput');
var Button = require('react-bootstrap/lib/Button');

var TodoFilter = React.createClass({
  render: function() {
    console.log("Rendering TodoFilter, state=", this.state);
    return (
      <div>
        <Panel className='filterPanel'>
          <div className="">
            <ul className="nav nav-tabs">
              <li id='open' className="active"><a data-toggle="tab" onClick={this.openFilter}>Open</a></li>
              <li id='closed'><a data-toggle="tab" onClick={this.closeFilter}>Complete</a></li>
              <li id='all'><a data-toggle="tab" onClick={this.allFilter}>All</a></li>
            </ul>
        </div>
        </Panel>
      </div>
    )
  },

  allFilter: function(e){
    e.preventDefault();
    this.props.allFilter();
  },

  openFilter: function(e){
    e.preventDefault();
    this.props.openFilter();

  },
  closeFilter: function(e){
    e.preventDefault();
    this.props.closeFilter();
  },

  getInitialState: function() {
    var initFilter = this.props.initFilter;
    return {status: initFilter.status, priority: initFilter.priority};
  },

  componentWillReceiveProps: function(newProps) {
    if (newProps.initFilter.status === this.state.status
        && newProps.initFilter.priority === this.state.priority) {
      console.log("TodoFilter: componentWillReceiveProps, no change");
      return;
    }
    console.log("TodoFilter: componentWillReceiveProps, new filter:", newProps.initFilter);
    this.setState({status: newProps.initFilter.status, priority: newProps.initFilter.priority});
  },

  onChangeStatus: function(e) {
    this.setState({status: e.target.value});
  },
  onChangePriority: function(e) {
    this.setState({priority: e.target.value});
  },

  submit: function(e) {
    var newFilter = {};
    if (this.state.priority) newFilter.priority = this.state.priority;
    if (this.state.status) newFilter.status = this.state.status;
    this.props.submitHandler(newFilter);
  }
});

module.exports = TodoFilter;
