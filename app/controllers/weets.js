const userService = require('../services/users');
const jokesService = require('../services/jokes');
const weetService = require('../services/weets');
const logger = require('../logger');

exports.postWeets = async (req, res, next) => {
  try {
    const user = req.body;
    const userFound = await userService.findUser(user);
    if (userFound) {
      const weet = await jokesService.getJokes();
      const weetCreated = await weetService.userWeet({ userId: userFound.id, content: weet });
      res.status(200).send(weetCreated);
    } else {
      res.status(400).send({ msg: 'No se encontro usuario' });
    }
  } catch (error) {
    logger.error(error.message);
    next(error);
  }
};
