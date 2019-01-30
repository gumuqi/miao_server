const { app } = require('egg-mock/bootstrap');
const factories = require('./factories');

before(() => factories(app));
afterEach(async () => {
    app.model.Project.destroy({ truncate: true, force: true });
})
