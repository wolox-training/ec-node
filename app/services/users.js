const { databaseError } = require('../errors');
const User = require('../models').users;
const errorMsg = require('../constants/errorMessages');

exports.createUser = async userParams => {
  try {
    const userCreated = await User.create(userParams);
    return userCreated;
  } catch (error) {
    throw databaseError(errorMsg.userError);
  }
};
