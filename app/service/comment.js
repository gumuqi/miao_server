'use strict';

const Service = require('egg').Service;

class CommentService extends Service {
  /**
   * 获取一个用户的评论列表
   * @param {Object} param 查询参数
   * @return {Array} 评论列表
   */
  async query(param) {
    const ctx = this.ctx;

    const list = await this.app.mysql.query(`
    SELECT
      project_id,
      USER.user_id,
      USER.nick_name,
      USER.avatarUrl,
      COMMENT.comment_cont,
      COMMENT.created_at
      
    FROM
      COMMENT LEFT JOIN USER ON COMMENT.user_id = USER.user_id 
    WHERE
      COMMENT.project_id = "${param.project_id}"
    `)
    return list;
  }
  /**
   * 新增一条评论
   * @param {Object} param 评论信息
   * @return {Object} 增加的评论
   */
  async create(param) {
    const ctx = this.ctx;

    const comment = await ctx.model.Comment.create(param);

    return comment;
  }
}

module.exports = CommentService;
