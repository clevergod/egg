'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/hello', controller.hello.index);
  router.get('/search', controller.search.index);
  router.get('/user/:id/:name', controller.user.index);
  router.get('/user/:id', controller.user.detail);
};
