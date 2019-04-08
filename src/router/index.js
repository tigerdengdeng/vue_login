//引入vue
import Vue from 'vue'
//引入路由组件
import Router from 'vue-router';
//注册路由
Vue.use(Router);
//引入路由需要的组件

// //引入子组件begin
//import Login from  '../views/login/login'//引用登录页
// import Index from  '../views/Home/Index' //首頁

const Login = () => import(/* webpackChunkName: "group-foo" */ '../views/login/login.vue') //異步加載
const Index = () => import(/* webpackChunkName: "group-foo" */ '../views/Home/Index.vue')

const Userlist = () => import(/* webpackChunkName: "group-foo" */ '../views/user/userlist.vue') //異步加載
const Useradd = () => import(/* webpackChunkName: "group-foo" */ '../views/user/useradd.vue')

//配置路由
const router = new Router({
    routes:[
     {path:"/",component:Login },  //根路径登录页面
     {path:"/Index",component:Index,children:[
         {path:"/Userlist",component:Userlist},
         {path:"/Useradd",component:Useradd}
      ]}, //首頁
   ],
   mode:"history"  //去掉URL的#

})

//抛出路由
export default router;
