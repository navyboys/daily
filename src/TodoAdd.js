var React = require('react');
var ReactDOM = require('react-dom');

var Panel = require('react-bootstrap/lib/Panel');
// var Input = require('react-bootstrap/lib/Input');
var Button = require('react-bootstrap/lib/Button');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var ControlLabel = require('react-bootstrap/lib/ControlLabel');
var FormControl = require('react-bootstrap/lib/FormControl');

var TodoAdd = React.createClass({
  render: function() {
    console.log("Rendering TodoAdd");
    return (
      <Panel header=" ">
        <FormGroup controlId="formBasicText">
            <form name="todoAdd">
              <FormControl
                name="todoAdd"
                type="text"
                placeholder="Enter new task"
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
              <Button type='submit' bsStyle='primary' label="Add new task" bsStyle="primary" className='submitTaskBtn' onClick={this.handleSubmit}>Add new task
              </Button>

            </form>
        </FormGroup>
      </Panel>
    )
  },




  handleSubmit: function(e) {
    e.preventDefault();
    // var form = document.forms.todoAdd;
    var form = document.getElementById("formBasicText");
    console.log("in handleSubmit function "+form.value);
    if (form.value==="") return;
    // debugger;
    this.props.addTodo({title: form.value, status: 'open', user_id: '1'});
    // clear the form for the next input
    form.value = "";
  }
});

module.exports = TodoAdd;
