var strftime = require('strftime');
var Todo = require('../models/todo');

module.exports.getTodos = function(req, res){
  var user_id = req.query.user_id;
  var date = req.query.date;
  var status = req.query.status;

  Todo.where({user_id: user_id, due: date})
      .fetchAll()
      .then(function (collection) {
        res.json({error: false, data: collection.toJSON()});
      })
      .catch(function (err) {
        res.status(500).json({error: true, data: {message: err.message}});
      });
};

module.exports.addTodo = function(req, res){
  if (!req.body.user_id || !req.body.title) {
    res.status(403).end();
    console.log("first if");
  }
  console.log("in addTodo");
  var newTodo = new Todo(req.body);
  newTodo.set('status', 'open');
  newTodo.set('due', strftime('%F', new Date()));
  console.log("just before calling save");
  // debugger;
  newTodo.save()
         .then(function (todo) {
          res.json({error: false, data: {id: todo.id}});
         })
         .catch(function (err) {
          res.status(500).json({error: true, data: {message: err.message}});
         });
};

module.exports.updateTodo = function(req, res){
  Todo.where({id: req.params.id})
      .fetch()
      .then((todo) => {
        todo.save({
          title: req.body.title,
          status: req.body.status
        })
        .then(function() {
          res.json({error: false, data: {message: 'Todo details updated'}});
        })
        .catch(function(err) {
          res.status(500).json({error: true, data: {message: err.message}});
        });
      });
};

module.exports.deleteTodo = function(req, res){
  Todo.where({id: req.params.id})
      .fetch()
      .then((todo) => {
        todo.destroy()
            .then(function () {
              res.json({error: false, data: {message: 'Todo successfully deleted'}});
            })
            .catch(function (err) {
              res.status(500).json({error: true, data: {message: err.message}});
            });
      });
};
