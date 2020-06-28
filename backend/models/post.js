const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, required: true, max: 100 },
  body: { type: String, required: true, max: 1000 },
  time: { type: Date, default: Date.now },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  status: { type: String, enum: ["unpublished", "published"], default: "unpublished", required: true },
});


PostSchema.virtual("url").get(function () {
  return "/post/" + this._id;
});

module.exports = mongoose.model("Post", PostSchema);
