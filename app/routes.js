const { healthCheck } = require('./controllers/healthCheck');
const { signUp, signIn, getUsers, adminLog } = require('./controllers/users');
const { postWeets } = require('./controllers/weets');
const { validateParams, verifyToken } = require('./middlewares/paramsValidator');
const { checkParamSignUp, checkParamSignIn, checkParamWeet } = require('./middlewares/schemas/Validations');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/users', [verifyToken], getUsers);
  app.post('/users', [checkParamSignUp, validateParams], signUp);
  app.post('/admin/users', [checkParamSignUp, validateParams], adminLog);
  app.post('/users/sessions', [checkParamSignIn, validateParams], signIn);
  app.post('/weets', [checkParamWeet, validateParams, verifyToken], postWeets);
};
