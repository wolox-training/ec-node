const { DATABASE_ERROR } = require('../app/errors');
const errorMsg = require('../app/constants/errorMessages');

exports.mock1 = {
  firstName: 'Javer',
  lastName: 'Bena',
  password: 'hola345346',
  email: 'javer@wolox.com'
};
exports.mock2 = {
  internalCode: DATABASE_ERROR,
  message: errorMsg.userError
};
exports.test1 = {
  firstName: 'Javer',
  lastName: 'Bena',
  password: 'hola345346',
  email: 'javer@wolox.com'
};
exports.test2 = {
  firstName: 'Emilio',
  lastName: 'Juarez',
  password: 'hola345346',
  email: 'javer@wolox.com'
};
exports.test3 = {
  firstName: 'Emilio',
  lastName: 'Caamano',
  password: '1234',
  email: 'Caamano@wolox.com'
};
exports.test4 = {
  firstName: '',
  lastName: 'Caamano',
  password: 'hola345346',
  email: 'Emilio@wolox.com'
};
