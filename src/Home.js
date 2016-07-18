var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Link = require('react-router').Link;

var Home = React.createClass({
  render: function() {
    return (
      <div id='login-container'>
        <div>
          <img src='hero.png' width="550" height="600"></img>
        </div>
        <div id='login-btn' className='text-center'>
          <form onSubmit={this.handleSubmit}>
            <a type='submit' className="btn btn-social btn-github"
               href='auth/github'>
              <i className="fa fa-github"></i>
              Login with Github
            </a>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = Home;
