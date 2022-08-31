const jokes = require('../services/jokes');

exports.jokes = async (req, res) => {
  const joke = await jokes.getJokes();
  res.send(joke).status();
};
