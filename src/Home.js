var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Link = require('react-router').Link;

var Home = React.createClass({
  render: function() {
    return (
      <div id='github-login-btn'>
        <form onSubmit={this.handleSubmit}>
          <a type='submit' className="btn btn-block btn-social btn-github"
             href='auth/github'>
            <i className="fa fa-github"></i>
            Login with Github
          </a>
        </form>
      </div>
    )
  }
});

module.exports = Home;
