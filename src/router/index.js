//引入vue
import Vue from 'vue'
//获取参数
import  getQueryString from './getQueryString';
//引入路由组件
import Router from 'vue-router';

import cookie from '../static/js/cookie';

//注册路由
Vue.use(Router);
//引入路由需要的组件


//公共部分
// import app from '../views/app/app';

//全局状态控制引入
import store from '../store/store'

//异步加载首页
// var home = function(resolve) {
//   require.ensure(['../views/home/home'], () => {
//     resolve(require('../views/home/home'))
//   }, 'home')
// };


// //引入子组件begin
import Login from '../views/login/login'//引用登录页





//配置路由
//配置路由
var router = new Router({
    routes:[
     {path:"/",component:Login},  //根路径登录页面
     // {path:"/Hello",component:Hello},
   ],
   mode:"history"  //去掉URL的#

})

// //进行路由判断
// router.beforeEach((to, from, next) => {
//   var nextPath = cookie.getCookie('nextPath')
//   console.log(nextPath)
//   if(nextPath=="pay"){
//     next({
//       path: '/app/home/member/order',
//     });
//   }else{
//     if(to!=undefined){
//       if(to.meta.need_log){
//         console.log(to.meta.need_log)
//         if(!store.state.userInfo.token){
//           next({
//             path: '/app/login',
//           });
//         }else {
//           next();
//         }
//       }else {
//         if (to.path === '/') {
//           next({
//             path: '/app/home/index',
//           });
//         }else {
//           next();
//         }
//       }
//     }else {
//       if (to.path === '/') {
//         next({
//           path: '/app/home/index',
//         });
//       }else {
//         next();
//       }
//     }
//   }


  // if(!store.state.userInfo.token&&to.path!='/app/login'){
  //     next({
  //     path: '/app/login',
  //   });
  // }else{
  //   if (to.path === '/') {
  //     next({
  //       path: '/app/home/index',
  //     });
  //   } else {
  //     next();
  //   }
  // }

  // if (to.path === '/') {
  //   next({
  //     path: '/app/home/index',
  //   });
  // } else {
  //   next();
  // }
  //有登录时使用
  // if(to.path !== "/login"&&to.path !== "/home/index"&&to.path !== "/"){
  //    // iView.LoadingBar.start();
  // }
// })

// if (to.path === '/') {
//         next({
//             path: '/home/index',
//         });
//     } else {
//         next();
//     }
// })

//修改网页标题
router.afterEach((to, from, next) => {
  document.title = to.matched[to.matched.length - 1].meta.title;
})

//抛出路由
export default router;
