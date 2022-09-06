const axios = require('axios');
const config = require('../../config');

exports.getJokes = async res => {
  try {
    const apiResponse = await axios.get(config.apiJokes.apiUrl);
    return apiResponse.data;
  } catch (error) {
    return res.status(500).send();
  }
};
