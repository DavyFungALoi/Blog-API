const User = require("../models/user");

exports.getUsers = function (req, res) {
  User.find({}, "first_name last_name").exec(function (err, list_users) {
    if (err) {
      return next(err);
    }
    console.log(list_users)
    res.send({
      users_list: list_users,
    });
  });
};

exports.postUsers = function (req, res) {
  const user = new User({
    first_name: "Obi-wan",
    last_name: "Kenobi",
    username: "Hellothere@kappa.com",
    password: "generalkenobi",
    id: 1,
  });
  user.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send(console.log(user));
    return;
  });
};

exports.putUsers = function (req, res) {
  res.send(console.log("Put Users"));
};

exports.deleteUsers = function (req, res) {
  res.send(console.log("delete Users"));
};
