const User = require('../models').users;

exports.signUp = async (req, res) => {
  try {
    console.log(req.body);
    const userCreated = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
    });
    return res.status(201).send(userCreated);
  } catch (error) {
    return res.status(500).send(error);
  }
};
