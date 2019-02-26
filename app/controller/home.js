'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = '徐志高的个人blog,测试';
  }
}

module.exports = HomeController;
