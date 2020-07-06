const mongoose = require("mongoose")
const Comment = require('../models/comments')

exports.getComments = function (req, res) {
    res.send(console.log('get Comments'))
}

exports.postComments = function (req, res) {
    const comment = new Comment({
        title: "Second Comment",
        body: "your post sucks twice",        
        post:'5f02be5bc7bcb556b50355a1'

      });
      comment.save(function (err) {
        if (err) {
          return next(err);
        }
        res.send(console.log(comment));
        return;
      });
}

exports.putComments = function (req, res) {
    res.send(console.log('Put Comments'))
}

exports.deleteComments = function (req, res) {
    res.send(console.log('delete Comments'))
}
