import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 完整引入v-charts

import VCharts from 'v-charts'
Vue.use(VCharts)
 
// 按需引入v-charts
// import VeLine from 'v-charts/lib/line'
// import VeHistogram from 'v-charts/lib/histogram'
// Vue.component(VeLine.name,VeLine)
// Vue.component(VeHistogram.name,VeHistogram)

import gComponent from '@/components/global'
// import '@/utils/interceptors'

Vue.config.productionTip = false;

Vue.use(ElementUI)
Vue.use(gComponent)
export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// ;(function(){
//   var rem = document.createElement('script');
//   rem.src = './rem.js';
//   document.body.appendChild(rem)
//   })()
