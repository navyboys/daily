var strftime = require('strftime');

var date = new Date();
var today = strftime('%F', date);

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, github_user_name: 'test_user', email: 'ben@daily.io'})
      ]);
    }).then(function () {
      return Promise.all([
        knex('todos').insert({id: 1, user_id: 1, title: 'Cook Dinner', status: 'open', due: today}),
        knex('todos').insert({id: 2, user_id: 1, title: 'Visit Bank', status: 'open', due: today})
      ]);
    }).then(function () {
      return Promise.all([
        knex('summaries').insert({id: 1, user_id: 1, description: 'Good', due: today}),
      ]);
    });
};
