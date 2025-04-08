/**
 * 测试路由 - 用于验证路由自动注册功能
 */
import Router from 'koa-router';
const router = new Router({
  prefix: '/test'
});

// 测试路由
router.get('/', async (ctx) => {
  ctx.body = {
    message: '这是测试路由',
    time: new Date()
  };
});

router.get('/info', async (ctx) => {
  ctx.body = {
    message: '路由自动注册成功',
    env: process.env.NODE_ENV || 'development',
    nodeVersion: process.version
  };
});

export default router; 