'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async login(param) {
    const ctx = this.ctx;
    const project = await ctx.model.User.create(param);
    return project;
  }
  async edit(param) {
    const ctx = this.ctx;
    const user = await ctx.model.User.findAll({
      where: {
        user_id: param.user_id
      }
    });
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }

    await user[0].update({
      good_at: param.good_at,
      contact_info: param.contact_info,
      works_info: param.works_info,
      description: param.description,
    });

    return user;
  }
  /**
   * 通过用户id获取用户详情
   * @param {Object} param 用户id
   * @return {Object} 用户对象
   */
  async getUser(param) {
    const ctx = this.ctx;
    const user = await ctx.model.User.findAll({
      where: {
        user_id: param.user_id
      }
    });
    return user;
  }
}

module.exports = UserService;
