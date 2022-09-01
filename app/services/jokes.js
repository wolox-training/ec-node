const axios = require('axios');
const config = require('../../config');

exports.getJokes = async () => {
  try {
    const apiResponse = await axios.get(config.apiJokes.apiUrl);
    return apiResponse.data;
  } catch (error) {
    return error;
  }
};
