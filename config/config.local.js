'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.sequelize = {
    dialect: 'mysql',
    database: 'miao',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '123456'
  };

  config.mysql = {
    client: {
      database: 'miao',
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: '123456'
    }
  };

  return config;
};
