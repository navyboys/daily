var bookshelf = require('../db/db.js').bookshelf;
var todo = require('./Todo.js');
var summary = require('./Summary.js');

var User = bookshelf.Model.extend({
  tableName: 'users',
  todos: function() {
    return this.hasMany(Todo);
  },
  summaries: function() {
    return this.hasMany(Summary);
  }
});

module.exports = User;
