const axios = require('axios');
const config = require('../../config');
const errorMsg = require('../constants/errorMessages');
const { defaultError } = require('../errors');
const logger = require('../logger');

exports.getJokes = async () => {
  try {
    const apiResponse = await axios.get(config.apiJokes.apiUrl);
    return apiResponse.data.joke;
  } catch (error) {
    logger.error(error);
    throw defaultError(errorMsg.apiError);
  }
};
