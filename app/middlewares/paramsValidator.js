const { validationResult } = require('express-validator');
const logger = require('../logger');

exports.validateParams = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    return next();
  } catch (error) {
    logger.error(error.message);
    return next(error);
  }
};
