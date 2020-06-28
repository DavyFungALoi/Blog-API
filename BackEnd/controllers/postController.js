const mongoose = require("mongoose")


exports.getPosts = function (req, res) {
    res.send(console.log('get posts'))
}

exports.postPosts = function (req, res) {
    res.send(console.log('create posts'))
}

exports.putPosts = function (req, res) {
    res.send(console.log('Put posts'))
}

exports.deletePosts = function (req, res) {
    res.send(console.log('delete posts'))
}