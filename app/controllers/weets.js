const jokes = require('../services/jokes_api');

exports.weets = async (req, res) => {
  const joke = await jokes.getJokes();
  res.send(joke);
};
