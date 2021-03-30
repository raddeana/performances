/**
 * 主入口文件
 * @author Philip
 */

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import initVant from './vant-ui'
import './less/index.less'

const app = createApp(App)

app.use(store)
app.use(router)

// 初始化
initVant(app)

app.mount('#app')
