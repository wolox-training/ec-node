const bcryptjs = require('bcryptjs');
const config = require('../../config');
const logger = require('../logger');
const errorMsg = require('../constants/errorMessages');
const { defaultError } = require('../errors');

exports.encryptPassword = password => {
  try {
    const encryptedPassword = bcryptjs.hashSync(password, Number(config.auth.rounds));
    return encryptedPassword;
  } catch (error) {
    logger.error(error.message);
    throw defaultError(errorMsg.userError);
  }
};
