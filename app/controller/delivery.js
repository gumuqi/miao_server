'use strict';

const Controller = require('egg').Controller;

class DeliveryController extends Controller {
  async queryProject() {
    const ctx = this.ctx;
    const param = {
      user_id: ctx.query.user_id || ''
    };

    const list = await ctx.service.delivery.queryProject(param);
    ctx.body = list;
  }
  async queryUser() {

  }
}

module.exports = DeliveryController;
