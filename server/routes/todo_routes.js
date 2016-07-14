var express = require('express');
var todo_router = express.Router();
var TodoController = require('../controllers/todo_controllers');

// Get all todos
todo_router.route('/todos').get(TodoController.getTodos);
// Add a new todo
// todo_router.route('/todos').post(TodoController.addTodo);

// // Delete a post by cuid
// router.route('/posts/:cuid').delete(PostController.deletePost);

// export default router;
module.exports = todo_router;
