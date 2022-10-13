const jokesService = require('../services/jokes');
const weetService = require('../services/weets');
const logger = require('../logger');
const helpers = require('../helpers/pagination');

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
exports.getWeets = async (req, res, next) => {
  try {
    const allWeets = await weetService.getWeets();
    const pagination = req.query;
    const sortedWeets = await helpers.pagination(pagination, allWeets);
    logger.info('weets: ', sortedWeets);
    res.status(200).send(sortedWeets);
  } catch (error) {
    logger.error(error.message);
    next(error);
  }
};
