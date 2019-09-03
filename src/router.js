import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
const system = () => import("@/views/system/system.vue")
//注册登录
const signin = () => import("@/views/login/signin");
const signup = () => import("@/views/login/signup");
//404页面
const notDefined = () => import('@/views/notdefined/notdefined')
//领导驾驶舱
const leaderDrive = () => import('@/views/system/leader/leaderDrive')
//门禁管理
const doorControl = () =>import("@/views/system/doorControl/doorControl");



Vue.use(Router);

const router = new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "signin",
      component: signin
    },
    //登录
    {
      path: "/signin",
      name: "signIn",
      component: signin
    },
    //注册
    {
      path: "/signup",
      name: "signUp",
      component: signup
    },
    //404页面
    {
      path:'*',
      name:"404",
      component:notDefined
    },
    //所有系统的路由都在这个路由表里
    {
      path:'/system',
      name:'system',
      component:system,
      children:[
        //领导驾驶舱
        {
          path:'/system/',
          name:'leaderDrive',
          component:leaderDrive
        },
        {
          path:'/system/leaderDrive',
          name:'leader_drive',
          component:leaderDrive
        },
        //门禁
        {
          path: "/system/doorControl",
          name: "door_control",
          component:doorControl,
          children:[
            {
              path:'/system/doorControl/',
              name:'Home',
              component:Home
            },
            {
              path:'/system/doorControl/about',
              name:'About',
              component:About
            }
          ]
        }
      ]
    },
    
  ]
});
// router.beforeEach((to,from,next) => {

// })
// router.beforeResolve();
// router.afterEach();
export default router