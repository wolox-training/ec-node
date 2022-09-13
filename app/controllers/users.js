const userService = require('../services/users');
const varParse = require('../serializers/varParse');

exports.signUp = async (req, res, next) => {
  try {
    const userObject = req.body;
    const userCreated = varParse.nameParse(userObject);
    await userService.createUser(userCreated);
    res.status(201).send(userCreated);
  } catch (error) {
    next(error);
  }
};
