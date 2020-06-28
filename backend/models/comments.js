const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  title: { type: String, required: true, max: 25 },
  body: { type: String, required: true, max: 150 },
  time: { type: Date, default: Date.now },
  name: { type: String, default: 'Anonymous'},
  post: { type: Schema.Types.ObjectId, ref: 'Post', required: true }

});
CommentSchema
.virtual('url')
.get(function () {
    return '/Comment/' +this._id
  
});

module.exports = mongoose.model('Comment', CommentSchema);
