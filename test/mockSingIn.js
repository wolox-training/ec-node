const { DEFAULT_ERROR } = require('../app/errors');
const errorMsg = require('../app/constants/errorMessages');

exports.mock1 = {
  id: 1,
  first_name: 'Emilio',
  last_name: 'Caamano',
  email: 'Emilio@wolox.com',
  password: '$2a$10$f6D7YnNEU/nDxIgJP3bS0uW5Eu.ZPooVrdtbcse5i3HorOmQ1KU2m'
};
exports.mock2 = {
  internalCode: DEFAULT_ERROR,
  message: errorMsg.decritedError
};
exports.test1 = { email: 'Emilio@wolox.com', password: 'hola1234' };
exports.test2 = {
  id: 1,
  first_name: 'Emilio',
  last_name: 'palvava',
  email: 'Hola1@wolox.com',
  password: '$2a$10$KbZAxSW1JsuM4/KKbqwg4.xoYOk44S.i8cifIUsl9pNUvHm7hU/fO'
};
