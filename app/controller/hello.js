'use strict';

const Controller = require('egg').Controller;

class HelloController extends Controller {
  async index() {
    this.ctx.body = 'hello world';
  }
}

module.exports = HelloController;
