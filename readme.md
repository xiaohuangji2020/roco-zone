## 个人网站代码

### 项目目录

```text
roco-zone/
│
├── server/                         # 服务端
│   └── src/
│       ├── controllers/            # 控制器层，处理请求和响应
│       │   ├── userController.ts
│       │   └── productController.ts
│       │
│       ├── services/               # 服务层，包含业务逻辑
│       │   ├── userService.ts
│       │   └── productService.ts
│       │
│       ├── routes/                 # 路由定义
│       │   ├── index.ts            # 主路由文件
│       │   └── userRoutes.ts
│       │
│       ├── middlewares/            # 中间件
│       │   └── authMiddleware.ts
│       │
│       ├── models/                 # 数据模型（如果使用 ORM）
│       │   └── userModel.ts
│       │
│       ├── types/                  # 类型定义
│       │   └── userModel.ts
│       │
│       └── app.ts                  # Koa 应用程序入口
│
├── web/                            # web端
│   └── src/
│       ├── assets/                 # 资源
│       ├── components/             # 组件
│       ├── views/                  # 页面
│       └── main.ts                 # 入口文件
│
├── package.json                    # 项目依赖和脚本
├── tsconfig.json                   # TypeScript 配置
└── .env                            # 环境变量配置（可选）
```


### 使用技术
server端：nodejs + typescript + koa2 + koa-router
web端：vue3 + vite2 + typescript + eslint + stylelint


### 关于stylelint的配置
1. stylelint-config-recommended-vue是用来校验vue文件中的css，对应的插件是postcss-html

### 其他

有一个template分支，用于当模板使用，仅保留最基础的代码