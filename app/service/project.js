'use strict';

const Service = require('egg').Service;

class ProjectService extends Service {
  /**
   * @param {Object} param 查询参数，如项目名称、技术类型等
   * @return {Array} 项目列表
   */
  async query(param) {
    let where = '';
    if (param.user_id) {
      // 如果传了user_id，说明要查询的是某个人发布的项目列表
      where = `where project.user_id = "${param.user_id}"`;
    }
    const list = await this.app.mysql.query(`
    select ta.*,tb.count from
    (
    select project.id, name, status, price, technology, duration, avatarUrl, project.updated_at from project
    left join user
    on project.user_id = user.user_id
    ${where} 
    ) ta
    left join
    (
    select project_id, count(user_id) as count from delivery
    group by project_id
    ) tb on ta.id=tb.project_id`);

    return list;
    
  }
  /**
   * @param {String} id 项目id
   * @return {Object} 项目
   */
  async queryById(id) {
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
  /**
   * 更新一个项目
   * @return {Object} 更新结果
   */
  async update(param) {
    const ctx = this.ctx;
    const project = await ctx.model.Project.findById(param.id);
    if (!project) {
      return 404;
    } else if (project.user_id != param.user_id) {
      // 如果不是项目的创建者是没有更新权限的
      return this.config.NO_PERMISION;
    }

    await project.update({
      name: param.name,
      price: param.price,
      technology: param.technology,
      duration: param.duration,
      description: param.description,
    });

    return project;
  }
  /**
   * 删除一个项目
   * @param {String} id 项目id
   * @return {Number} 删除结果
   */
  async delete(param) {
    const ctx = this.ctx;
    const project = await ctx.model.Project.findById(param.id);
    if (!project) {
      return 404;
    } else if (project.user_id != param.user_id) {
      // 如果不是项目的创建者是没有更新权限的
      return this.config.NO_PERMISION;
    }

    await project.destroy();
    return 200;
  }
}

module.exports = ProjectService;
