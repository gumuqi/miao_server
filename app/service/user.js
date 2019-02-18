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
   * 获取用户信息，包括发布/中标的项目数等信息
   * @param {Object} param 用户id、项目id
   * @return {Object} 用户对象
   */
  async getUser(param) {
    const user = this.app.mysql.query(`
    SELECT
      ta.*,
      count 
    FROM
      ( SELECT * FROM user WHERE user_id = "${param.user_id}" ) ta
      LEFT JOIN ( SELECT user_id AS uid, count( id ) AS count FROM project GROUP BY user_id ) tb
    ON ta.user_id = tb.uid
    `)
    return user;
  }

}

module.exports = UserService;
