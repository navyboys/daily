var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var strftime = require('strftime');
require('dotenv').load();
var AccessToken = require('twilio').AccessToken;
var ConversationsGrant = AccessToken.ConversationsGrant;
var randomUsername = require('../randos');
var fs = require('fs');
var https = require('https');
var privateKey  = fs.readFileSync('certs/key.pem', 'utf8');
var certificate = fs.readFileSync('certs/cert.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};

var app = express();
var port = 3000;
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(9000);

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpack_config = require('../webpack.config');

var compiler = webpack(webpack_config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpack_config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(bodyParser.json());
var api_todo_router = require('./routes/todo_routes');
app.use('/api', api_todo_router);
var api_user_router = require('./routes/user_routes');
app.use('/api', api_user_router);

var passport = require('passport');
var githubStrategy = require('passport-github').Strategy;
var session = require('express-session');
app.use(require('cookie-parser')());
app.use(session({ secret: 'daily', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

var token = '';
var username = '';

passport.use(new githubStrategy({
    clientID: process.env.GITHUB_CLENT_ID,
    clientSecret: process.env.GITHUB_CLENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/github/callback',
    scope: ['repo']
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
      token = accessToken;
      username = profile.displayName;
      return done(null, profile);
    });
  }
));

// we will call this to start the GitHub Login process
app.get('/auth/github', passport.authenticate('github'));

// GitHub will call this URL
app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
    //redirect to SSL server for video chat to work
    // res.redirect('https://192.168.1.65:9000');
  }
);

app.get('/userinfo', function(req, res){
  res.json({username: username, token: token});
});

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/home');
});

var globalIdentity;
//for video chat
app.get('/token', function(request, response) {
    var identity = randomUsername(globalIdentity);
    globalIdentity = identity;

    // Create an access token which we will sign and return to the client,
    // containing the grant we just created
    var token = new AccessToken(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_API_KEY,
        process.env.TWILIO_API_SECRET
    );

    // Assign the generated identity to the token
    token.identity = identity;

    //grant the access token Twilio Video capabilities
    var grant = new ConversationsGrant();
    grant.configurationProfileSid = process.env.TWILIO_CONFIGURATION_SID;
    token.addGrant(grant);

    // Serialize the token to a JWT string and include it in a JSON response
    response.send({
        identity: identity,
        token: token.toJwt()
    });
});


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
