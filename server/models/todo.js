var bookshelf = require('../db/db').bookshelf;
var User = require('./user');

var Todo = bookshelf.Model.extend({
  tableName: 'todos',
  user: function() {
    return this.belongsTo(User);
  }
});

module.exports = Todo;
