var Todo = require('../models/Todo');

module.exports.getTodos = function(req, res){
  Todo.fetchAll().exec((err, todos) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(todos);
  });
};

// export function addPost(req, res) {
//   if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
//     res.status(403).end();
//   }
//
//   const newPost = new Post(req.body.post);
//
//   // Let's sanitize inputs
//   newPost.title = sanitizeHtml(newPost.title);
//   newPost.name = sanitizeHtml(newPost.name);
//   newPost.content = sanitizeHtml(newPost.content);
//
//   newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
//   newPost.cuid = cuid();
//   newPost.save((err, saved) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.json({ post: saved });
//   });
// }
//
// export function getPost(req, res) {
//   Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.json({ post });
//   });
// }
//
// export function deletePost(req, res) {
//   Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//
//     post.remove(() => {
//       res.status(200).end();
//     });
//   });
// }
