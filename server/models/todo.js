var bookshelf = require('../db/db.js').bookshelf;
bookshelf.plugin('registry');
var user = require('./User.js');

var Todo = bookshelf.Model.extend({
  tableName: 'todos',
  user: function() {
    return this.belongsTo(User);
  }
});

module.exports = Todo;
