// 入口文件
import  Vue from 'vue'
import app from './App.vue'

// 按需导入 mint ui 中的组件
import {Header} from 'mint-ui'
// 注册
Vue.component(Header.name, Header)

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// 导入路由的包
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

var vm = new Vue({
  el:'#app',
  data:{},
  render:c=>c(app),
  router
})