const db = require('../models');
const errorMsg = require('../constants/errorMessages');
const { databaseError } = require('../errors');
const logger = require('../logger');

exports.createUser = async userParams => {
  try {
    console.log(userParams);
    return await db.User.create(userParams);
  } catch (error) {
    logger.error(error);
    throw databaseError(errorMsg.userError);
  }
};
exports.findUser = async logInfo => {
  try {
    const { email } = logInfo;
    const userFound = await db.User.findOne({
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
    const allUsers = await db.User.findAll();
    return allUsers;
  } catch (error) {
    logger.error(error);
    throw databaseError(errorMsg.userFindError);
  }
};
