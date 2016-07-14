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

app.use(express.static(path.join(__dirname, '../public')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// app.get("/", function(req, res) {
//   res.sendFile(path.resolve(__dirname, '../public/index.html'))
// })

// app.post('/api/todos', function (req, res) {
//   var newTodo = req.body;
//
//   newTodo.status = 'open';
//   newTodo.due = strftime('%F', new Date());
//
//   res.json(newTodo);
//
//   // newTodo.save((err, saved) => {
//   //   if (err) {
//   //     res.status(500).send(err);
//   //   }
//   //   res.json(saved);
//   // });
// });

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
