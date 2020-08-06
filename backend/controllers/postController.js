const mongoose = require("mongoose");
const Post = require("../models/post");
const User = require("../models/user");

exports.getPosts = function (req, res) {
  Post.find({ status: "published" }, "title time status")
    .populate("author")
    .exec(function (err, list_posts) {
      if (err) {
        return next(err);
      }
      res.send({
        post_list: list_posts,
      });
    });
};

exports.postPosts = function (req, res) {
  const post = new Post({
    title: req.body.title.title,
    body:req.body.body.commentInput,
    
    author: req.body.author,
    status: req.body.status.postStatus,
  });
  post.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send(console.log(post));
    return;
});

/*


  const post = new Post({
    title: req.body.title.title,
    body:req.body.body.commentInput,
    
    author: req.body.author,
    status: req.body.status.postStatus,
  });
  post.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send(console.log(post));
    return;

  const post = new Post({
    title: "Second PUBLISHED POST",
    body:
      "Second blogpost which is going to very long - PUBLISHED POST.  dsifghndfkgndfjhgbwerbw jhgkdkfgnei iergnekjrgnd fngeourgjierngd fihnwergkenrg dfigjnekngid ufg ehnhrgien",
    author: "5ef7bc99d225e9839931888c",
    status: "published",
  });
  post.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send(console.log(post));
    return;
  });


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

*/

exports.putPosts = function (req, res) {
  res.send(console.log("Put posts"));
};

exports.deletePosts = function (req, res) {
  res.send(console.log("delete posts"));
};

exports.getSinglePost = function (req, res, next) {
  Post.findOne({ _id: req.params.id }, "title time status body author")
    .populate("author")
    .populate("")
    .exec(function (err, data_post) {
      if (err) {
        return next(err);
      }
      res.send({
        post_data: data_post,
      });
    });
};


///

exports.getPostsAdmin = function (req, res) {
  Post.find({}, "title time status")
  .populate("author")
  .exec(function (err, list_posts) {
    if (err) {
      return next(err);
    }
   
    res.send({
      post_list: list_posts,
    });
  });

};
/*
  Post.find({}, "title time status")
    .populate("author")
    .exec(function (err, list_posts) {
      if (err) {
        return next(err);
      }
      console.log(lists_posts)
      res.send({
        post_list: list_posts,
      });
    });


*/