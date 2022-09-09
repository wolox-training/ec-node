const { databaseError } = require('../errors');
const User = require('../models').users;
const errorMsg = require('../constants/errorMessages');

exports.createUser = userParams => {
  try {
    return User.create(userParams);
  } catch (error) {
    throw databaseError(errorMsg.userError);
  }
};
