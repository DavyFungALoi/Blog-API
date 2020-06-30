const User = require("../models/user");
const async = require("async");

exports.getUsers = function (req, res) {
  User.find({}, "first_name last_name").exec(function (err, list_users) {
    if (err) {
      return next(err);
    }
    console.log(list_users);
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

exports.putUsers = function (req, res, next) {
  const user = new User({
    first_name: "Obi-wan",
    last_name: "Kenobi",
    username: "Hellothere@kappa.com",
    password: "ohmygod",
    _id: req.params.id,
  });
  User.findByIdAndUpdate(req.params.id, user, function (err) {
    if (err) {
      return next(err);
    }
    console.log(req.params.id);
    console.log(user);
    res.send(console.log("updated user"));
  });
};

//req.params.id,
//5ef8ec3fc87a600523692414

exports.deleteUsers = async function (req, res, next) {
  try {
    await User.findByIdAndRemove({ _id: req.params.id }),
      function (err) {
        console.log("hello");
        if (err) {
          console.log(err);
          return next(err);
        }
      };
    console.log(req.params.id);
    res.send(console.log("delete Users"));
  } catch (err) {
    next(err);
  }
};

//DELETE USER IS ASYNCHROUS, NEED TO ADD ASYNC FUNCTIONALITY

/*
const { [req.params.messageId]: message, ...otherMessages } = messages;

  messages = otherMessages;

  return res.send(message);

*/
