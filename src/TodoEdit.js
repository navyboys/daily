var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Link = require('react-router').Link;

var Panel = require('react-bootstrap/lib/Panel');
// var Input = require('react-bootstrap/lib/Input');
var Button  = require('react-bootstrap/lib/Button');
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');
var Alert = require('react-bootstrap/lib/Alert');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var ControlLabel = require('react-bootstrap/lib/ControlLabel');
var FormControl = require('react-bootstrap/lib/FormControl');

var TodoEdit = React.createClass({
  render: function() {
    var success = (
      <Alert bsStyle="success" onDismiss={this.dismissSuccess} dismissAfter={5000}>
        Todo saved to DB successfully.
      </Alert>
    );
    return (
      <div style={{maxWidth: 600}}>
        <Panel header={"Edit todo: " + this.props.params.id}>
          <form onSubmit={this.submit}>
            <Input type="select" label="Priority"
              value={this.state.priority} onChange={this.onChangePriority}>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
              <option value="P3">P3</option>
            </Input>
            <Input type="select" label="Status" value={this.state.status} onChange={this.onChangeStatus}>
              <option>New</option>
              <option>Open</option>
              <option>Closed</option>
            </Input>
            <Input type="text" label="Title" value={this.state.title} onChange={this.onChangeTitle}/>
            <Input type="text" label="Owner" value={this.state.owner} onChange={this.onChangeOwner}/>
            <ButtonToolbar>
              <Button type="submit" bsStyle="primary">Submit</Button>
              <Link className="btn btn-link" to="/todos">Back</Link>
            </ButtonToolbar>
          </form>
        </Panel>
        {this.state.successVisible ? success : null}
      </div>
    );
  },

  getInitialState: function() {
    return {successVisible: false};
  },

  componentDidMount: function() {
    this.loadData();
  },

  componentDidUpdate: function(prevProps) {
    console.log("TodoEdit: componentDidUpdate", prevProps.params.id, this.props.params.id);
    if (this.props.params.id != prevProps.params.id) {
      this.loadData();
    }
  },

  loadData: function() {
    $.ajax('/api/todos/' + this.props.params.id) .done(function(todo) {
      this.setState(todo);
    }.bind(this));
  },

  onChangePriority: function(e) {
    this.setState({priority: e.target.value});
  },
  onChangeStatus: function(e) {
    this.setState({status: e.target.value});
  },
  onChangeOwner: function(e) {
    this.setState({owner: e.target.value});
  },
  onChangeTitle: function(e) {
    this.setState({title: e.target.value});
  },

  showSuccess: function() {
    this.setState({successVisible: true});
  },
  dismissSuccess: function() {
    this.setState({successVisible: false});
  },

  submit: function(e) {
    e.preventDefault();
    var todo = {
      status: this.state.status,
      priority: this.state.priority,
      owner: this.state.owner,
      title: this.state.title
    }

    $.ajax({
      url: '/api/todos/' + this.props.params.id, type: 'PUT', contentType:'application/json',
      data: JSON.stringify(todo),
      dataType: 'json',
      success: function(todo) {
        this.setState(todo);
        this.showSuccess();
      }.bind(this),
    });
  }
});

module.exports = TodoEdit;
