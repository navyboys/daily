var express = require('express');
var todo_router = express.Router();
var TodoController = require('../controllers/todo_controllers');

// Get all Posts
todo_router.route('/todos').get(TodoController.getTodos);

// // Get one post by cuid
// router.route('/posts/:cuid').get(PostController.getPost);
//
// // Add a new Post
// router.route('/posts').post(PostController.addPost);
//
// // Delete a post by cuid
// router.route('/posts/:cuid').delete(PostController.deletePost);

// export default router;
module.exports = todo_router;
