const mongoose = require("mongoose")

exports.getComments = function (req, res) {
    res.send(console.log('get Comments'))
}

exports.postComments = function (req, res) {
    res.send(console.log('create Comments'))
}

exports.putComments = function (req, res) {
    res.send(console.log('Put Comments'))
}

exports.deleteComments = function (req, res) {
    res.send(console.log('delete Comments'))
}