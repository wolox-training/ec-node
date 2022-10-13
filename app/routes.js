const { healthCheck } = require('./controllers/healthCheck');
const { signUp, signIn, getUsers, adminLog } = require('./controllers/users');
const { createWeet, getWeets } = require('./controllers/weets');
const { verifyToken } = require('./middlewares/authenticator');
const { validateParams } = require('./middlewares/paramsValidator');
const { checkParamSignUp, checkParamSignIn } = require('./middlewares/schemas/Validations');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/users', [verifyToken], getUsers);
  app.post('/users', [checkParamSignUp, validateParams], signUp);
  app.post('/admin/users', [checkParamSignUp, validateParams], adminLog);
  app.post('/users/sessions', [checkParamSignIn, validateParams], signIn);
  app.post('/weets', [verifyToken], createWeet);
  app.get('/weets', [verifyToken], getWeets);
};
