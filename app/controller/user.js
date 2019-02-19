'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const ctx = this.ctx;
    let param = ctx.request.body;
    const user = await ctx.service.user.login(param);
    ctx.body = user;
  }
  async editUser() {
    const ctx = this.ctx;
    let param = ctx.request.body;
    const user = await ctx.service.user.edit(param);
    ctx.body = user;
  }
  async getUser() {
    const ctx = this.ctx;
    let param = ctx.query;
    let user = await ctx.service.user.getUser(param);

    if (user.length > 0) {
      user = user[0];
    } else {
      user = null;
    }
    ctx.body = user;
  }
  async getOpenId() {
    const ctx = this.ctx;
    let param = ctx.query;
    let userInfo = await this.ctx.service.user.getOpenId(param);
    ctx.body = userInfo;
  }
}

module.exports = UserController;
