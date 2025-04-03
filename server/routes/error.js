/**
 * 错误路由 - 处理错误报告的路由
 */
import Router from 'koa-router';
import { reportError } from '../controllers/error/errorController.js';

const router = new Router({
  prefix: '/code'
});

// 接收错误报告
router.post('/error', reportError);

export default router; 