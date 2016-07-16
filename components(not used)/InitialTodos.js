import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import * as actions from '../actions';


export default class InitialTodos extends Component{
  constructor(props) {
    super(props)
    // this.state = {todos: []}
  }

  componentDidMount() {
    console.log("component did mount function");
    $.ajax({
      url: '/api/todos?user_id=1&date=2016-07-14',
      dataType: 'json',
      cache: false,
      success: function(todos) {
        console.log("logging "+todos["data"]);
        // this.setState({todos: todos });
        dispatch(actions.default(todos));
        // console.log(todos.data[0].id);

      }.bind(this),
      error: function(xhr, status, err) {
        console.error('http://localhost:3000/api/todos?user_id=1&date="2016-07-14"', status, err.toString());
      }.bind(this)
    });

  }
  render() {
    return(
      <div>
      </div>
    )

  }
}

export default connect()(InitialTodos)
