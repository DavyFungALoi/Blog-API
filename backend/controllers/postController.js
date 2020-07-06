const mongoose = require("mongoose")
const Post = require("../models/post")
const User = require("../models/user")



exports.getPosts = function (req, res) {
    res.send(console.log('get posts'))
}

exports.postPosts = function (req, res) {
    const post = new Post({
        title: "First Post",
        body: "first blogpost which is going to very long. lets see what happens when this blogpost exceeds like 10000 characters.",        
        author: '5ef7bc99d225e9839931888c',
        status:'unpublished'

      });
      post.save(function (err) {
        if (err) {
          return next(err);
        }
        res.send(console.log(post));
        return;
      });
}

exports.putPosts = function (req, res) {
    res.send(console.log('Put posts'))
}

exports.deletePosts = function (req, res) {
    res.send(console.log('delete posts'))
}
