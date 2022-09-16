const bcryptjs = require('bcryptjs');
const config = require('../../config');

exports.encryptPassword = password => {
  const encryptedPassword = bcryptjs.hashSync(password, Number(config.auth.rounds));
  return encryptedPassword;
};
