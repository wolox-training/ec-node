const User = require('../models/index').users;

exports.signUp = (req, res) => {
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password
  }).catch(error => {
    res.status(500).json(error);
  });
};
