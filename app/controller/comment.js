'use strict';

const Controller = require('egg').Controller;

class CommentController extends Controller {
  /**
   * 按照用户id查询该用户的历史评价
   */
  async query() {
    const ctx = this.ctx;
    const param = {
      user_id: ctx.query.userId || ''
    };

    const list = await ctx.service.project.query(param);
    ctx.body = list;
  }
  /**
   * 增加一个项目
   */
  async create() {
    const ctx = this.ctx;
    const { comment_cont, becomment_userid, user_id } = ctx.request.body;

    const param = {
      comment_cont,
      becomment_userid,
      user_id
    };

    const project = await ctx.service.project.create(param);

    ctx.status = 201;
    ctx.body = project;
  }
}

module.exports = CommentController;
