var express = require('express');
var user_router = express.Router();
var UserController = require('../controllers/user_controllers');

// Get User by github_id
user_router.route('/users/:github_id').get(UserController.getUserByGithubID);
// Add User
user_router.route('/users').post(UserController.addUser);

// export default router;
module.exports = user_router;
