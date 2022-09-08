const userService = require('../services/users');

exports.signUp = async (req, res) => {
  try {
    const userCreated = await userService.createUser({
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      email: req.body.email,
      password: req.body.password
    });
    return res.status(201).send(userCreated);
  } catch (error) {
    return res.status(500).send(error);
  }
};
