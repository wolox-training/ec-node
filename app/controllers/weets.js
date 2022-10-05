const userService = require('../services/users');
const jokesService = require('../services/jokes');
const weetService = require('../services/weets');
const logger = require('../logger');

exports.postWeets = async (req, res, next) => {
  try {
    const user = req.body;
    const userFound = await userService.findUser(user);
    if (userFound) {
      const weet = jokesService.getJokes();
      const weetCreated = await weetService.userWeet(user, weet);
      res.status(400).send(weetCreated);
    }
  } catch (error) {
    logger.error(error.message);
    next(error);
  }
};
