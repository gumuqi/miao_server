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
   * @param {String} id 项目id
   * @return {Object} 项目
   */
  async queryUser(id) {
    const ctx = this.ctx;
    const project = await ctx.model.Project.findById(id);
    return project;
  }
  /**
   * 新增一个项目
   * @param {Object} param 项目信息
   * @return {Object} 增加的项目
   */
  async create(param) {
    const ctx = this.ctx;

    const project = await ctx.model.Project.create(param);

    return project;
  }
}

module.exports = DeliveryService;
