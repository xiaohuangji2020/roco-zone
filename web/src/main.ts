import { createApp } from 'vue'
import './assets/css/main.css'
import App from './App.vue'
import router from '@/routers/index'

createApp(App)
  .use(router)
  .mount('#app')
