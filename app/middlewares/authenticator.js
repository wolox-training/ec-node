const jwt = require('jsonwebtoken');
const logger = require('../logger');

exports.verifyToken = (req, res, next) => {
  const token = req.header('authToken');
  if (!token) return res.status(401).json({ error: 'Acceso denegado' });
  try {
    const userInfo = jwt.verify(token, process.env.TOKEN_SECRET);
    req.userId = userInfo.userOnline.id;
    return next();
  } catch (error) {
    logger.error(error.message);
    return next(error);
  }
};
