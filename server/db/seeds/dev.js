var strftime = require('strftime');

var today = new Date();
var oneDayAgo = new Date();
var twoDayAgo = new Date();
var threeDayAgo = new Date();
var fourDayAgo = new Date();
var fiveDayAgo = new Date();
var sixDayAgo = new Date();
var sevenDayAgo = new Date();

today = strftime('%F', today);
oneDayAgo.setDate(oneDayAgo.getDate() - 1);
oneDayAgo = strftime('%F', oneDayAgo);
twoDayAgo.setDate(twoDayAgo.getDate() - 2);
twoDayAgo = strftime('%F', twoDayAgo);
threeDayAgo.setDate(threeDayAgo.getDate() - 3);
threeDayAgo = strftime('%F', threeDayAgo);
fourDayAgo.setDate(fourDayAgo.getDate() - 4);
fourDayAgo = strftime('%F', fourDayAgo);
fiveDayAgo.setDate(fiveDayAgo.getDate() - 5);
fiveDayAgo = strftime('%F', fiveDayAgo);
sixDayAgo.setDate(sixDayAgo.getDate() - 6);
sixDayAgo = strftime('%F', sixDayAgo);
sevenDayAgo.setDate(sevenDayAgo.getDate() - 7);
sevenDayAgo = strftime('%F', sevenDayAgo);

exports.seed = function(knex, Promise) {
  return knex('todos').del()
    .then(function () {
      return Promise.all([
        knex('todos').insert({user_id: 1, title: 'Cook Dinner', status: 'open', due: today}),
        knex('todos').insert({user_id: 1, title: 'Visit Bank', status: 'closed', due: today}),
        knex('todos').insert({user_id: 1, title: 'Cook Dinner', status: 'closed', due: oneDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Visit Bank', status: 'closed', due: oneDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Cook Dinner', status: 'closed', due: oneDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Visit Bank', status: 'open', due: oneDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Cook Dinner', status: 'closed', due: oneDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Visit Bank', status: 'closed', due: oneDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Cook Dinner', status: 'open', due: oneDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Visit Bank', status: 'closed', due: oneDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Cook Dinner', status: 'open', due: oneDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Cook Dinner', status: 'closed', due: oneDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Visit Bank', status: 'closed', due: twoDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Cook Dinner', status: 'closed', due: twoDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Visit Bank', status: 'open', due: twoDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Cook Dinner', status: 'closed', due: twoDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Visit Bank', status: 'closed', due: twoDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Cook Dinner', status: 'closed', due: twoDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Visit Bank', status: 'closed', due: threeDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Cook Dinner', status: 'closed', due: threeDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Visit Bank', status: 'open', due: threeDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Cook Dinner', status: 'closed', due: threeDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Visit Bank', status: 'closed', due: fourDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Cook Dinner', status: 'open', due: fourDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Cook Dinner', status: 'closed', due: fourDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Visit Bank', status: 'closed', due: fourDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Cook Dinner', status: 'closed', due: fourDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Visit Bank', status: 'open', due: fourDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Cook Dinner', status: 'closed', due: fourDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Visit Bank', status: 'closed', due: fiveDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Cook Dinner', status: 'open', due: fiveDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Cook Dinner', status: 'closed', due: fiveDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Visit Bank', status: 'closed', due: fiveDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Cook Dinner', status: 'closed', due: fiveDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Visit Bank', status: 'open', due: sixDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Cook Dinner', status: 'closed', due: sixDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Visit Bank', status: 'closed', due: sixDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Cook Dinner', status: 'open', due: sevenDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Cook Dinner', status: 'closed', due: sevenDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Visit Bank', status: 'closed', due: sevenDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Cook Dinner', status: 'closed', due: sevenDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Visit Bank', status: 'open', due: sevenDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Cook Dinner', status: 'closed', due: sevenDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Visit Bank', status: 'closed', due: sevenDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Cook Dinner', status: 'open', due: sevenDayAgo}),
        knex('todos').insert({user_id: 1, title: 'Visit Bank', status: 'closed', due: sevenDayAgo})
      ]);
    });
};
