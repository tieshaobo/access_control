import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
// import doorControl from "./views/doorControl/index";
const doorControl = () =>import("@/views/doorControl/index")
Vue.use(Router);

export default new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: Home
    // },
    {
      path: "/doorControl",
      name: "doorControl",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:doorControl,
      children:[
        {
          path:'/',
          name:'Home',
          component:Home
        }
      ]
    }
  ]
});
