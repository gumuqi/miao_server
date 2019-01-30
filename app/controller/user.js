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
    const user = await ctx.service.user.getUser(param);
    ctx.body = user;
  }
}

module.exports = UserController;
