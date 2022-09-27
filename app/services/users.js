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
exports.findUser = async logInfo => {
  try {
    const { email } = logInfo;
    const userFound = await User.findOne({
      where: {
        email
      }
    });
    return userFound;
  } catch (error) {
    logger.error(error);
    throw databaseError(errorMsg.userFindError);
  }
};
exports.getUsers = async () => {
  try {
    const allUsers = await User.findAll();
    return allUsers;
  } catch (error) {
    logger.error(error);
    throw databaseError(errorMsg.userFindError);
  }
};
