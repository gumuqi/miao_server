'use strict';

const Service = require('egg').Service;

class DeliveryService extends Service {
 /**
  * 通过user_id查询该开发者投递的项目
  * @param {Object} param 查询参数
  * @return {Array} 项目列表
  */
  async queryProject(param) {
    // 第一步查询出所有的项目id
    const list = await this.app.mysql.query(`
    select name, status, price, technology, duration, project.description from delivery 
    left join project
    on project.id = delivery.project_id
    left join user
    on delivery.user_id = user.id
    and delivery.user_id = "${param.user_id}"`);

    return list;
    
  }
  /**
   * @param {String} param 查询参数
   * @return {Object} 项目
   */
  async queryDelivered(param) {
    let sql = `
    SELECT
      ta.project_id,
      ta.created_at AS deliver_time,
      USER.* 
    FROM
    ( SELECT * FROM delivery WHERE project_id = ${param.id} ) ta
    LEFT JOIN USER ON ta.user_id = USER.user_id`
    const ctx = this.ctx;
    const list = await this.app.mysql.query(sql);
    return list;
  }
  /**
   * 新增一个项目
   * @param {Object} param 项目信息
   * @return {Object} 增加的项目
   */
  async create(param) {
    const ctx = this.ctx;

    const project = await ctx.model.Delivery.create(param);

    return project;
  }
}

module.exports = DeliveryService;
