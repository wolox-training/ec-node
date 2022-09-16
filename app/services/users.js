const User = require('../models').users;
const errorMsg = require('../constants/errorMessages');
const { databaseError } = require('../errors');
const logger = require('../logger');

exports.createUser = async userParams => {
  try {
    return await User.create(userParams);
  } catch (error) {
    logger.error(error);
    throw databaseError(errorMsg.userError);
  }
};
