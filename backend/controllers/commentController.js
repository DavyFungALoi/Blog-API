const mongoose = require("mongoose")
const Comment = require('../models/comments')

exports.getComments = function (req, res) {
  console.log(req.params.id)
  Comment.find({}, "title name body").populate({
    path: 'post',
    match: {
       _id: req.params.id
    }
 }).exec(function (err, list_comments) {
    if (err) {
      return next(err);
    }
    console.log(list_comments);
    res.send({
      comments_list: list_comments,
    });
  });
}

exports.postComments = function (req, res) {
    const comment = new Comment({
        title: "ThirdComment",
        body: "your post sucks Thrice",        
        post:'5f02c0beaa1f5759eac5475d'

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
//*{person1: mongoose.Types.ObjectId(Person._id)}

//
/*
{
.populate('flats', null, { isDeleted: false })
  null, { isDeleted: false }
       ({
        path: 'supporterOf',
        match: {
           yourObjectOfIndividualDocument: yourMatchingIdOfIndividual
        }
     })
     { isDeleted: false }
*/

//"First Comment" { post: req.params.id}