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
      user.user_id,
      user.nick_name,
      user.avatarUrl,
      comment.comment_cont,
      comment.created_at
    FROM
    comment LEFT JOIN user ON comment.user_id = user.user_id 
    WHERE
    comment.project_id = "${param.project_id}"
    ORDER BY created_at DESC
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
    let result = {};
    const comment = await ctx.model.Comment.create(param);

    let user = await this.app.mysql.query(`
      SELECT * FROM user WHERE user_id = "${param.user_id}"
    `)
    user = user.length > 0 ? user[0] : {};

    return {
      id: comment.id,
      project_id: comment.project_id,
      user_id: comment.user_id,
      nick_name: user.nick_name,
      avatarUrl: user.avatarUrl,
      comment_cont: comment.comment_cont,
      created_at: comment.created_at
    };
  }
}

module.exports = CommentService;
