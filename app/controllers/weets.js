const jokesService = require('../services/jokes');
const weetService = require('../services/weets');
const logger = require('../logger');

exports.createWeet = async (req, res, next) => {
  try {
    const { userId } = req;
    const weet = await jokesService.getJokes();
    const weetCreated = await weetService.createWeet({ userId, content: weet });
    res.status(201).send(weetCreated);
  } catch (error) {
    logger.error(error.message);
    next(error);
  }
};
