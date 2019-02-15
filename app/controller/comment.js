'use strict';

const Controller = require('egg').Controller;

class CommentController extends Controller {
  /**
   * 按照用户id查询该用户的历史评价
   */
  async query() {
    const ctx = this.ctx;
    const param = {
      project_id: ctx.query.project_id || ''
    };

    const list = await ctx.service.comment.query(param);
    ctx.body = list;
  }
  /**
   * 增加一个项目
   */
  async create() {
    const ctx = this.ctx;
    const { comment_cont, project_id, user_id } = ctx.request.body;

    const param = {
      comment_cont,
      project_id,
      user_id
    };

    const comment = await ctx.service.comment.create(param);

    ctx.body = comment;
  }
}

module.exports = CommentController;
