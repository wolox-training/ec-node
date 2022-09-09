const { databaseError } = require('../errors');
const User = require('../models').users;
const errorMsg = require('../constants/errorMessages');

exports.createUser = async userParams => {
  try {
    await User.create(userParams);
    return userParams;
  } catch (error) {
    throw databaseError(errorMsg.userError);
  }
};
