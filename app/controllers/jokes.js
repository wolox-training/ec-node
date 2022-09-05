const jokes = require('../services/jokes');

exports.jokes = async (req, res) => {
  try {
    const joke = await jokes.getJokes();
    res.status(200).send(joke);
  } catch (error) {
    res.status(404).send(error);
  }
};
