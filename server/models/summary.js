var bookshelf = require('../db/db.js').bookshelf;
var user = require('./User.js');

var Summary = bookshelf.Model.extend({
  tableName: 'summaries',
  user: function() {
    return this.belongsTo(User);
  }
});

module.exports = Summary;
