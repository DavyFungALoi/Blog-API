const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: { type: String, required: true},
  last_name:  { type: String, required: true},
  username:  { type: String},
  password: {type: String},
});

UserSchema
.virtual('url')
.get(function () {
    return '/user/' +this._id
  
});


module.exports = mongoose.model('User', UserSchema);
