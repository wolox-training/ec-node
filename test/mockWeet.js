const { DEFAULT_ERROR } = require('../app/errors');
const errorMsg = require('../app/constants/errorMessages');

exports.mock1 = {
  id: 1,
  userId: 1,
  content: 'Chuck Norris decided to sell his poop as a food product ... we know it now as wheaties.'
};
exports.mock2 = {
  internalCode: DEFAULT_ERROR,
  message: errorMsg.userFindError
};
exports.test1 = {
  id: 1,
  content: 'Chuck Norris decided to sell his poop as a food product ... we know it now as wheaties.'
};
exports.test2 = {
  firstName: 'Emilio',
  lastName: 'Juarez',
  password: 'hola345346',
  email: 'javer@wolox.com'
};
