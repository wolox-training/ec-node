const userService = require('../services/users');
const varParse = require('../serializers/varParse');
const logger = require('../logger');
const helper = require('../helpers/helpers');

exports.signUp = async (req, res, next) => {
  try {
    const password = helper.encryptPassword(req.body.password);
    const userObject = req.body;
    const userCreated = varParse.nameParse(userObject, password);
    await userService.createUser(userCreated);
    logger.info('User created: ', userCreated);
    res.status(201).send(userCreated);
  } catch (error) {
    logger.error(error.message);
    next(error);
  }
};
