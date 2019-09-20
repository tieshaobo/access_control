import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo:{
      userName:'',
      
    }
  },
  mutations: {
    //设置用户名
    setUserName(state,payload){
      state.userInfo.userName = payload.name
    },
    //获取用户名
    getUserName(state,payload){
      state.userInfo.userName = payload.name
    },
  },
  actions: {}
});
