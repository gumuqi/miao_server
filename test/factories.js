'use strict';

const { factory } = require('factory-girl');

module.exports = app => {
  app.factory = factory;
  factory.define('project', app.model.Project, {
    name: factory.sequence('Project.name', n => `name_${n}`),
    status: 0,
    price: 0,
    technology: '',
    duration: 1,
    create_time: '',
    creator: '',
    description: '',
  });
};
