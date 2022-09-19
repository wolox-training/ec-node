const jokes = require('../services/jokes');

exports.jokes = async (req, res, next) => {
  try {
    const joke = await jokes.getJokes();
    res.status(200).send(joke);
  } catch (error) {
    next(error);
  }
};
