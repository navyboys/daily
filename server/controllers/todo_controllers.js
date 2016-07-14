var Todo = require('../models/todo');
var strftime = require('strftime');

module.exports.getTodos = function(req, res){
  var user_id = req.query.user_id;
  var date = req.query.date;

  Todo.where({user_id: user_id, due: date})
      .fetchAll()
      .then((err, todos) => {
        if (err) {
          res.status(500).send(err);
        }
        res.json(todos);
    }
  );
};

// module.exports.addTodo = function(req, res){
//   if (!req.body.user_id || !req.body.todo.title) {
//     res.status(403).end();
//   }
//
//   var newTodo = new Todo(req.body.todo);
//
//   newTodo.status = 'open';
//   newTodo.due = strftime('%F', new Date());
//
//   newTodo.save((err, saved) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.json({ todo: saved });
//   });
// };

// export function deletePost(req, res) {
//   Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//
//     post.remove(() => {
//       res.status(200).end();
//     });
//   });
// }
