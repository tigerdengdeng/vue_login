import Vue from 'vue'  //全局引入vue
import App from './App.vue' //引入需要渲染的视图组件
import Axios from 'axios';
Vue.prototype.$http = Axios
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import md5 from 'js-md5';
Vue.prototype.$md5 = md5

Vue.use(ElementUI)

//全局引入路由配置
import router from './router';
//路由配置 end

//全局引入store存儲
import store from  './store/store'

new Vue({
  el: '#app',
  router, //全局引入路由配置,
  store,//挂载
  render: h => h(App)
})
