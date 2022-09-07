const { healthCheck } = require('./controllers/healthCheck');
const { jokes } = require('./controllers/jokes');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/jokes', jokes);
};
