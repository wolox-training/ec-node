const config = require('../config').common.database;

module.exports = {
  development: {
    username: config.username,
    password: config.password,
    database: config.name,
    host: config.host,
    port: config.port,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
  testing: {
    username: config.username,
    password: config.password,
    database: config.name,
    host: config.host,
    port: config.port,
    dialect: 'postgres',
    logging: false
  },
  production: {
    username: config.username,
    password: config.password,
    database: config.name,
    host: config.host,
    port: config.port,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: true
    }
  }
};
