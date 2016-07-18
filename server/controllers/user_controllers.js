var User = require('../models/user');

module.exports.getUserByGithubID = function(req, res){
  var github_id = req.params.github_id;

  User.where({github_id: github_id})
      .fetch()
      .then(function (user) {
        res.json({error: false, data: user.toJSON()});
      })
      .catch(function (err) {
        res.status(500).json({error: true, data: {message: err.message}});
      });
};

module.exports.addUser = function(req, res){
  if (!req.body.github_id || !req.body.github_access_token) {
    res.status(403).end();
  }

  var newUser = new User(req.body);
  newUser.save()
         .then(function (user) {
          res.json({error: false, data: {id: user.id}});
         })
         .catch(function (err) {
          res.status(500).json({error: true, data: {message: err.message}});
         });
};
