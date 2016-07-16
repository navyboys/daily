// var React = require('react');
import React from 'react'
import 'babel-polyfill'
// import { render } from 'react-dom'

var ReactDOM = require('react-dom');
// var Router = require('react-router').Router;
// var Route = require('react-router').Route;
var Redirect = require('react-router').Redirect;

import { Router, Route, browserHistory } from 'react-router';
import About from './About';
import Header from './Header';

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
      <Route path="/todos/:id" component={TodoEdit} />
      <Redirect from="/" to="/todos" />
      <Route path='/about' component={ About } />
      <Route path="*" component={NoMatch} />
    </Router>
  ),
  document.getElementById('main')
);
