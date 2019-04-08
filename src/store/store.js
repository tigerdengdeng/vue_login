import Vue from 'vue'
import Vuex from 'vuex' //引用vuex

Vue.use(Vuex)  //注册vuex


//存储
const state = {
  userinfo: JSON.parse(localStorage.getItem('userinfo'))

}
//用来操作 state
const mutations = {
  //保存数据
  SAVE_USERINFO(state, userinfo) {
    //先把数据存入本地存储
    localStorage.setItem('userinfo',JSON.stringify(userinfo))
    state.userinfo = userinfo

  }
}

//创建store出库暴露出去
export default new Vuex.Store({
  state,
  mutations
})


