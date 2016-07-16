var React = require('react');
var ReactDOM = require('react-dom');

var Panel = require('react-bootstrap/lib/Panel');
var Input = require('react-bootstrap/lib/Input');
var ButtonInput = require('react-bootstrap/lib/ButtonInput');

var TodoAdd = React.createClass({
  render: function() {
    //console.log("Rendering TodoAdd");
    return (
      <Panel header=" ">
        <form name="todoAdd">
          <Input type="text" name="title" label="What needs to be done?" />
          <ButtonInput value="Add new task" bsStyle="primary" onClick={this.handleSubmit} />
        </form>
      </Panel>
    )
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var form = document.forms.todoAdd;
    this.props.addTodo({owner: form.owner.value, title: form.title.value, status: 'New', priority: 'P1'});
    // clear the form for the next input
    form.owner.value = ""; form.title.value = "";
  }
});

module.exports = TodoAdd;
