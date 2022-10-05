const { DEFAULT_ERROR } = require('../app/errors');
const errorMsg = require('../app/constants/errorMessages');

exports.mock1 = {
  firstName: 'Emilio',
  lastName: 'caamano',
  email: 'emicaama2@wolox.com',
  password: '$2a$10$M0R7mQxm00N8Dn/R/UhySeyW9FCOVF.DG.Rzz07A38LYlsUDqrZb2',
  admin: true
};
exports.mock2 = {
  internalCode: DEFAULT_ERROR,
  message: errorMsg.userFindError
};
exports.test1 = {
  firstName: 'Emilio',
  lastName: 'caamano',
  email: 'emicaama2@wolox.com',
  password: 'hola1234'
};
exports.test2 = {
  id: 1,
  first_name: 'Emilio',
  last_name: 'palvava',
  email: 'Hola1@wolox.com',
  password: '$2a$10$KbZAxSW1JsuM4/KKbqwg4.xoYOk44S.i8cifIUsl9pNUvHm7hU/fO'
};
