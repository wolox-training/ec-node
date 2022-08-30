const axios = require('axios');

exports.getJokes = async() =>{
  try {
    const data = await axios.get('https://geek-jokes.sameerkumar.website/api?format=json');
    return data.data;
  } catch (error) {
    return error;
  }
};