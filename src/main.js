import Vue from 'vue'  //全局引入vue
import App from './App.vue' //引入需要渲染的视图组件


//全局引入jq
// import $ from 'jquery';

//全局引入路由配置
import router from './router';
//路由配置 end

//全局状态控制引入
import store from './store/store';


//全局加载resource拦截器
import './axios/';
import Axios from 'axios';
Vue.prototype.$http = Axios


new Vue({
  el: '#app',
  router, //全局引入路由配置,
  store,
  render: h => h(App)
})
