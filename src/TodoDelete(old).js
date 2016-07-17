var React = require('react');
var ReactDOM = require('react-dom');

var Panel = require('react-bootstrap/lib/Panel');
// var Input = require('react-bootstrap/lib/Input');
var Button = require('react-bootstrap/lib/Button');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var ControlLabel = require('react-bootstrap/lib/ControlLabel');
var FormControl = require('react-bootstrap/lib/FormControl');

var TodoDelete = React.createClass({
  render: function() {
    console.log("Rendering TodoDelete");
    return (
              <Button id="deleteBtn" type='submit' bsStyle='primary' label="Delete" bsStyle="danger" onClick={this.handleDelete}>Delete task
              </Button>
    )
  },

  handleDelete: function(e) {
    e.preventDefault();
    var form = document.getElementById("deleteBtn");
    // console.log("in handleDelete function "+this.state.id);
    console.log("in handleDelete function "+e.id);
    // debugger;
    this.props.deleteTodo({title: form.value, status: 'New', user_id: '1'});
    // clear the form for the next input
    form.value = "";
  }
});

module.exports = TodoDelete;
