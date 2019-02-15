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
  /**
   * 投递一个项目
   */
  async deliver() {
    const ctx = this.ctx;
    const param = ctx.request.body;
    const result = await ctx.service.delivery.create(param);
    ctx.body = result;
  }
  /**
   * 获取投递项目的用户列表
   */
  async getDelivered() {
    const ctx = this.ctx;
    let param = {
      project_id: ctx.query.id
    }
    let list = await ctx.service.delivery.queryDelivered(param);
    ctx.body = list;
  }
}

module.exports = DeliveryController;
