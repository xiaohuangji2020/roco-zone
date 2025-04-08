import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import routes from './routes/index.ts';

const app = new Koa();
const router = new Router();

// 中间件
app.use(bodyParser());

// 使用路由中间件
app.use(routes.routes());
app.use(router.allowedMethods());

// 错误处理
app.on('error', (err, ctx) => {
  console.error('服务器错误', err, ctx);
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
}); 