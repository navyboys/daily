var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var strftime = require('strftime');

var app = express();
var port = 3000;

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpack_config = require('../webpack.config');

var compiler = webpack(webpack_config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpack_config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

var api_todo_router = require('./routes/todo_routes');
app.use(bodyParser.json());
app.use('/api', api_todo_router);

var passport = require('passport');
var githubStrategy = require('passport-github').Strategy;
var session = require('express-session');
app.use(session({secret: "-- ENTER CUSTOM SESSION SECRET --"}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  // placeholder for custom user serialization
  // null is for errors
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  // placeholder for custom user deserialization.
  // maybe you are going to get the user from mongo by id?
  // null is for errors
  done(null, user);
});

passport.use(new githubStrategy({
    clientID: '138ef0834313d69d7069',
    clientSecret: 'f6831300c2f47ced6a5e179ef7416f4c057147d2',
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log('accessToken: ' + accessToken);
    console.log('profile: ' + profile);
    return done(null, profile);
  }
));

// we will call this to start the GitHub Login process
app.get('/auth/github', passport.authenticate('github'));

// GitHub will call this URL
app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  }
);

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

// var githubOAuth = require('github-oauth')({
//   githubClient: '138ef0834313d69d7069',
//   githubSecret: 'f6831300c2f47ced6a5e179ef7416f4c057147d2',
//   baseURL: 'http://localhost',
//   loginURI: '/login',
//   callbackURI: 'http://localhost:3000/callback',
//   scope: 'repo' // optional, default scope is set to user
// });
//
// githubOAuth.on('error', function(err) {
//   console.error('there was a login error', err);
// });
//
// githubOAuth.on('token', function(token, serverResponse) {
//   console.log('here is your shiny new github oauth token', token);
//   serverResponse.end(JSON.stringify(token));
// });
//
// app.get('/login', function(req, res) {
//   githubOAuth.login(req, res);
// });
//
// app.get('http://localhost:3000/callback', function(req, res) {
//   githubOAuth.callback(req, res);
// });

app.use(express.static(path.join(__dirname, '../public')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
