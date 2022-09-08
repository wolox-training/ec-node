const { defaultError } = require('../errors');
const errorMsg = require('../constants/errorMessages');

exports.nameParse = userParams => {
  try {
    const userParsed = {
      first_name: userParams.firstName,
      last_name: userParams.lastName,
      email: userParams.email,
      password: userParams.password
    };
    return userParsed;
  } catch (error) {
    throw defaultError(errorMsg.parseError);
  }
};
