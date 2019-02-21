'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getOpenId(param) {
    const result = await this.app.curl(`https://api.weixin.qq.com/sns/jscode2session?appid=${param.appId}&secret=${param.appSecret}&js_code=${param.code}&grant_type=authorization_code`);
    return result.data;
  }
  async login(param) {
    let sql = `
    INSERT INTO user ( user_id, nick_name, avatarUrl, gender, created_at, updated_at ) SELECT
    '${param.user_id}',
    '${param.nick_name}',
    '${param.avatarUrl}',
    ${param.gender},
    '${new Date().Format("yyyy-MM-dd hh:mm:ss")}',
    '${new Date().Format("yyyy-MM-dd hh:mm:ss")}'
    FROM
    DUAL 
    WHERE
      NOT EXISTS ( SELECT user_id FROM user WHERE user_id = '${param.user_id}' );
    `;
    const user = await this.app.mysql.query(sql)
    return user;
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
    const user = await this.app.mysql.query(`
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
