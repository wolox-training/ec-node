const { Weet } = require('../models');
const errorMsg = require('../constants/errorMessages');
const { databaseError } = require('../errors');
const logger = require('../logger');

exports.createUser = async userWeet => {
  try {
    return await Weet.create(userWeet);
  } catch (error) {
    logger.error(error);
    throw databaseError(errorMsg.userFindError);
  }
};
