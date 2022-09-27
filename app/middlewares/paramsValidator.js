const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
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
exports.verifyToken = (req, res, next) => {
  const token = req.header('authToken');
  if (!token) return res.status(401).json({ error: 'Acceso denegado' });
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    return next();
  } catch (error) {
    logger.error(error.message);
    return next(error);
  }
};
