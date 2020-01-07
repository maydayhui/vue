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

// 轮播图
import { Swipe, SwipeItem, Button } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

import 'mint-ui/lib/style.css'

// 导入vue-resource 
import resource from 'vue-resource'
Vue.use(resource)
// 设置请求跟路径
Vue.http.options.root = "http://www.liulongbin.top:3005"
// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

// 导入时间插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter("dataFormat",function(dataStr, pattern="YYYY-MM-DD HH:mm:ss"){
 return  moment(dataStr).format(pattern)
})


var vm = new Vue({
  el:'#app',
  data:{},
  render:c=>c(app),
  router
})