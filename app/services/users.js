const { databaseError } = require('../errors');
const User = require('../models').users;
const errorMsg = require('../constants/errorMessages');
const varParse = require('../serializers/varParse');

exports.createUser = userParams => {
  try {
    const parsedParams = varParse.nameParse(userParams);
    return User.create(parsedParams);
  } catch (error) {
    throw databaseError(errorMsg.userError);
  }
};
