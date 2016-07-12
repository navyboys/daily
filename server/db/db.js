var db_config = require('./knexfile.js');
var env = process.env.BABEL_ENV || process.env.NODE_ENV || 'development';
var knex = require('knex')(db_config[env]);

var bookshelf = require('bookshelf')(knex);
module.exports.bookshelf = bookshelf;
