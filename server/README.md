## 这个是什么
一个node服务，用来辅助前端做不需要数据库查询的服务

## 目前功能
1. 错误信息上报，通过webhook报给机器人

## 技术栈

- 基于Koa2框架
- 使用koa-router管理路由
- 支持请求体解析（使用koa-bodyparser）
- 模块化的路由结构
- 基本的错误处理

# 安装与使用
```bash
# 安装依赖
npm install
# 开发模式启动（使用nodemon热重载）
npm run dev
# 生产模式启动
npm start
```

服务器将在 http://localhost:3000 启动

## 目录结构

```
koa-app/
├── app.js          # 应用入口
├── routes/         # 路由目录
│   └── index.js    # 路由入口，其他路由文件在加载时会自动扫描注册
├── controllers/    # controller
├── services/       # service  mvc规范，虽然目前没有model
└── README.md       # 项目说明
``` 