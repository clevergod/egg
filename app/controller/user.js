'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    console.log('================');
    console.log(this.ctx.params);
    const { id, name } = this.ctx.params;
    this.ctx.body = `UserID: ${id};UserID: ${name}`;
  }
  async detail() {
    const { id } = this.ctx.params;
    console.log('=====id====', id);
    const detail = await this.app.mysql.get('user', { id });
    if (!detail) {
      this.ctx.body = {
        state: 0,
        data: '无此用户',
      };
      return;
    }
    this.ctx.body = detail;
  }
}

module.exports = UserController;
