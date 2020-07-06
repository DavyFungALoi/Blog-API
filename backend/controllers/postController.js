const mongoose = require("mongoose")
const Post = require("../models/post")
const User = require("../models/user")



exports.getPosts = function (req, res) {
    Post.find({}, "title time").populate("author").exec(function (err, list_posts) {
        if (err) {
          return next(err);
        }
        console.log(list_posts);
        res.send({
          post_list: list_posts,
        });
      });
}

exports.postPosts = function (req, res) {
    const post = new Post({
        title: "Second PUBLISHED POST",
        body: "Second blogpost which is going to very long - PUBLISHED POST.  dsifghndfkgndfjhgbwerbw jhgkdkfgnei iergnekjrgnd fngeourgjierngd fihnwergkenrg dfigjnekngid ufg ehnhrgien",        
        author: '5ef7bc99d225e9839931888c',
        status:'published'

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
