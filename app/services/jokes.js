const axios = require('axios');

const apiURL = 'https://geek-jokes.sameerkumar.website/api?format=json';

exports.getJokes = async () => {
  try {
    const apiResponse = await axios.get(apiURL);
    return apiResponse.data;
  } catch (error) {
    return error;
  }
};
