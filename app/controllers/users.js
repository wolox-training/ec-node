const userService = require('../services/users');
const varParse = require('../serializers/varParse');

exports.signUp = async (req, res, next) => {
  try {
    const userCreated = varParse.nameParse({
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      email: req.body.email,
      password: req.body.password
    });
    await userService.createUser(userCreated);
    res.status(201).send(userCreated);
  } catch (error) {
    next(error);
  }
};
