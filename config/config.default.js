'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1548044611905_6782';

  // add your config here
  config.middleware = ['formatResponse'];

  config.view = {
    mapping: {
      '.html': 'nunjucks',
    }
  };
  
  config.errorCode = {
    NO_PERMISION: 1001
  };

  
  return config;
};
