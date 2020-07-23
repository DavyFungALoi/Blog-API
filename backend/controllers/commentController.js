const mongoose = require("mongoose");
const Comment = require("../models/comments");

exports.getComments = function (req, res) {
  console.log(req.params.id);
  Comment.find({ post: req.params.id }, "title name body").exec(function (
    err,
    list_comments
  ) {
    if (err) {
      return next(err);
    }
    res.send({
      comments_list: list_comments,
    });
  });
};
exports.postComments = function (req, res) {
  const comment = new Comment({
    title: "ThirdComment",
    body: "your post sucks Thrice",
    post: "5f02c0beaa1f5759eac5475d",
  });
  comment.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send(console.log(comment));
    return;
  });
};

exports.putComments = function (req, res) {
  res.send(console.log("Put Comments"));
};

exports.deleteComments = function (req, res) {
  res.send(console.log("delete Comments"));
};
//*{person1: mongoose.Types.ObjectId(Person._id)}

exports.postComment = function (req, res, next) {
  const comment = new Comment({
    name: req.body.name.username,
    title: req.body.title.title,
    body: req.body.body.commentInput,
    post: req.body.postId,
  });
  comment.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send(console.log(comment));
    return;
  });
  
};

