// const controller = require('./controllers/controller');
const { healthCheck } = require('./controllers/healthCheck');
const { jokes } = require('./controllers/jokes');
const { users } = require('./controllers/users');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/jokes', jokes);
  app.post('/users/signIn', users.signIn);
};
