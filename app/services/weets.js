const { Weet } = require('../models');
const errorMsg = require('../constants/errorMessages');
const { databaseError } = require('../errors');
const logger = require('../logger');

exports.createWeet = async weetContent => {
  try {
    return await Weet.create(weetContent);
  } catch (error) {
    logger.error(error);
    throw databaseError(errorMsg.userFindError);
  }
};
exports.getWeets = async () => {
  try {
    const allWeets = await Weet.findAll();
    return allWeets;
  } catch (error) {
    logger.error(error);
    throw databaseError(errorMsg.weetFindError);
  }
};
