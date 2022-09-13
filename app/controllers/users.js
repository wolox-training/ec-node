const bcryptjs = require('bcryptjs');
const userService = require('../services/users');
const varParse = require('../serializers/varParse');
const authConfig = require('../../config/auth');
const logger = require('../logger');

exports.signUp = async (req, res, next) => {
  try {
    const password = bcryptjs.hashSync(req.body.password, Number(authConfig.rounds));
    const userObject = req.body;
    const userCreated = varParse.nameParse(userObject, password);
    await userService.createUser(userCreated);
    console.log(userCreated);
    res.status(201).send(userCreated);
  } catch (error) {
    logger.error(error.message);
    next(error);
  }
};
