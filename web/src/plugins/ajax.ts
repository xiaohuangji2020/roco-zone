import type { App } from 'vue';
import axios from 'axios';

const instance = axios.create();
// instance.interceptors.request.use
// instance.interceptors.response.use
export default {
  install: (app: App) => {
    app.config.globalProperties.$http = instance;
    app.provide('$http', instance); // 提供vue文件的注入
  },
};

export { instance as $http };
