'use strict';

const Util = require('./util/index');
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/login', controller.user.login);  // 首次登录时保存用户信息
  router.post('/editUser', controller.user.editUser);  // 编辑个人信息
  router.get('/getUserInfo', controller.user.getUser); // 获取用户信息，包括发布/中标的项目数等信息
  router.get('/getOpenId', controller.user.getOpenId); // 获取当前登录用户openid

  router.get('/getProjectList', controller.project.query);  // 获取项目列表
  router.get('/getProjectDetail', controller.project.queryById);  // 获取单个项目详情
  router.post('/saveProject', controller.project.save); // 保存项目信息
  router.post('/selectBidder', controller.project.selectBidder); // 选取中标者
  router.post('/endProject', controller.project.endProject); // 结束项目

  router.get('/getProjectDelivery', controller.delivery.queryUser); // 获取项目的投递者列表
  router.get('/getMyDelivery', controller.delivery.queryProject); // 获取我投递的项目
  router.get('/getDelivered', controller.delivery.getDelivered);  // 获取投递项目的用户列表
  router.post('/deliver', controller.delivery.deliver); //投递项目

  router.get('/getComments', controller.comment.query); // 获取项目的评论列表
  router.post('/comment', controller.comment.create); // 增加一条评论
};
 