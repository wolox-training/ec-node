const { healthCheck } = require('./controllers/healthCheck');
const { jokes } = require('./controllers/jokes');
const { signUp } = require('./controllers/users');
const { validateParams } = require('./middlewares/paramsValidator');
const { checkParam } = require('./middlewares/schemas/singUpValidations');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/jokes', jokes);
  app.post('/users', [checkParam, validateParams], signUp);
};
