'use strict';

const { assert, app } = require('egg-mock/bootstrap');

describe('test/app/service/project.test.js', () => {
  describe('GET /project', () => {
    it('should work', async () => {
      await app.factory.createMany('project', 3);
      const res = await app.httpRequest.get('/project');
      assert(res.status === 200);
      assert(res.body.length === 3);
      assert(res.body[0].name);
    });
  });
});
