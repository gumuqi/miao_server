'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/login', controller.user.login)  // 首次登录时保存用户信息
  router.post('/editUser', controller.user.editUser)  // 编辑个人信息
  router.get('/getUserInfo', controller.user.getUser) // 获取用户详情

  router.get('/getProjectList', controller.project.query);  // 获取项目列表
  router.get('/getProjectDetail', controller.project.queryById);  // 获取单个项目详情
  router.post('/saveProject', controller.project.save); //保存项目信息
  
  router.get('/getProjectDelivery', controller.delivery.queryUser); // 获取项目的投递者列表
  router.get('/getMyDelivery', controller.delivery.queryProject); // 获取我投递的项目
};
 