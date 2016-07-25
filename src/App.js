import React from 'react'
import 'babel-polyfill'
import ReactDOM from 'react-dom';
var Redirect = require('react-router').Redirect;

import { Router, Route, browserHistory } from 'react-router';
import Home from './Home';
import About from './About';
import Chart from './Chart';
import Header from './Header';
import NavBar from './NavBar';

var VideoChat = require('./VideoChat');
var TodoList = require('./TodoList');
var TodoEdit = require('./TodoEdit');

var NoMatch = React.createClass({
  render: function() {
    return (
      <h2>No match for the route</h2>
    );
  }
});

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/header" component={Header} />
      <Route path="/todos" component={TodoList} />
      <Route path="/navbar" component={NavBar} />
      <Route path="/todos/:id" component={TodoEdit} />
      <Redirect from="/" to="/todos" />
      <Route path='/about' component={ About } />
      <Route path='/chart' component={ Chart } />
      <Route path='/home' component={ Home } />
      <Route path="*" component={NoMatch} />
    </Router>
  ),
  document.getElementById('main')
);
