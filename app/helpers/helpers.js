const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config');
const logger = require('../logger');
const errorMsg = require('../constants/errorMessages');
const { defaultError } = require('../errors');

exports.passEncryptred = password => {
  try {
    const encryptedPassword = bcryptjs.hashSync(password, Number(config.auth.rounds));
    return encryptedPassword;
  } catch (error) {
    logger.error(error.message);
    throw defaultError(errorMsg.encriptedError);
  }
};
exports.decryptPassword = (password, usuario) => {
  try {
    bcryptjs.compareSync(password, usuario.password);
    return usuario;
  } catch (error) {
    logger.error(error.message);
    throw defaultError(errorMsg.decritedError);
  }
};
exports.createToken = userOnline => {
  try {
    const token = jwt.sign({ userOnline }, config.auth.secret, {
      expiresIn: config.auth.expires
    });
    return token;
  } catch (error) {
    logger.error(error.message);
    throw defaultError(errorMsg.tokenError);
  }
};
