'use strict';

const Controller = require('egg').Controller;

class ProjectController extends Controller {
  /**
   * 按照项目名称或技术类型查询项目列表
   */
  async query() {
    const ctx = this.ctx;
    const param = {
      user_id: ctx.query.user_id || '',
      name: ctx.query.name || '',
      technology: ctx.query.technology || '',
    };

    const list = await ctx.service.project.query(param);
    ctx.body = list;
  }
  /**
   * 通过项目id查询项目
   */
  async queryById() {
    const ctx = this.ctx;
    let param = {
      id: ctx.query.id,
      user_id: ctx.query.user_id
    }
    let project = await ctx.service.project.queryById(param);

    if (project.length > 0) {
      project = project[0];
    } else {
      project = null;
    }
    ctx.body = project;
  }
  /**
   * 增加/更新一个项目
   */
  async save() {
    const ctx = this.ctx;
    const { id, name, price, technology, duration, user_id, description } = ctx.request.body;

    const param = {
      id,
      name,
      status: 0,
      price,
      technology,
      duration,
      user_id,
      description,
    };

    let project;
    if (id) {
      // 传了id说明是更新
      project = await ctx.service.project.update(param);
    } else {
      // 没传说明是新增
      project = await ctx.service.project.create(param);
    }
    
    ctx.body = project;
  }
  /**
   * 删除一个项目
   */
  async delete() {
    const ctx = this.ctx;
    const param = ctx.request.body;
    const project = await ctx.service.project.delete(param);

    ctx.body = project;
  }
}

module.exports = ProjectController;
