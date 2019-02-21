'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.sequelize = {
    dialect: 'mysql',
    database: 'miao',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'WangYang534591395@qq.com',
  };

  config.mysql = {
    client: {
      database: 'miao',
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: 'WangYang534591395@qq.com',
    }
  };

  return config;
};
