import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import gComponent from '@/components/global'
import '@/utils/interceptors'

Vue.config.productionTip = false;

Vue.use(ElementUI)
Vue.use(gComponent)
export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
