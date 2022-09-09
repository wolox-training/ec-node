const userService = require('../services/users');
const { databaseError } = require('../errors');
const errorMsg = require('../constants/errorMessages');
const varParse = require('../serializers/varParse');

exports.signUp = async (req, res) => {
  try {
    const userCreated = await varParse.nameParse({
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      email: req.body.email,
      password: req.body.password
    });
    userService.createUser(userCreated);
    return res.status(201).send(userCreated);
  } catch (error) {
    throw databaseError(errorMsg.userError);
  }
};
