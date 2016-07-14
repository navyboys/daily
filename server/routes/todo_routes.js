var express = require('express');
var todo_router = express.Router();
var TodoController = require('../controllers/todo_controllers');

// Get all todos
todo_router.route('/todos').get(TodoController.getTodos);
// Add a new todo
todo_router.route('/todos').post(TodoController.addTodo);

// Delete a todo
todo_router.route('/todos/:id').delete(TodoController.deleteTodo);

// export default router;
module.exports = todo_router;
