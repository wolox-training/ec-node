const bcryptjs = require('bcryptjs');
const config = require('../../config');
const logger = require('../logger');

exports.encryptPassword = (password, next) => {
  try {
    const encryptedPassword = bcryptjs.hashSync(password, Number(config.auth.rounds));
    return encryptedPassword;
  } catch (error) {
    logger.error(error.message);
    return next(error);
  }
};
