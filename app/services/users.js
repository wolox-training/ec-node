const { databaseError } = require('../errors');
const User = require('../models').users;
const errorMsg = require('../constants/errorMessages');

exports.createUser = async userParams => {
  try {
    return await User.create(userParams);
  } catch (error) {
    throw databaseError(errorMsg.userError);
  }
};
