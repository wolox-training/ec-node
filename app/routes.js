const { healthCheck } = require('./controllers/healthCheck');
const { jokes } = require('./controllers/jokes');
const { signUp, signIn, getUsers, adminLog } = require('./controllers/users');
const { validateParams, verifyToken } = require('./middlewares/paramsValidator');
const { checkParamSignUp, checkParamSignIn } = require('./middlewares/schemas/Validations');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/jokes', jokes);
  app.get('/users', [verifyToken], getUsers);
  app.post('/users', [checkParamSignUp, validateParams], signUp);
  app.post('/admin/users', [checkParamSignUp, validateParams], adminLog);
  app.post('/users/sessions', [checkParamSignIn, validateParams], signIn);
};
