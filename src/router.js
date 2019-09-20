import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
const system = () => import("@/views/system/system.vue")
//注册登录
const signin = () => import("@/views/login/signin");
const signup = () => import("@/views/login/signup");
//404页面
const notDefined = () => import('@/views/notdefined/notdefined');
//欢迎页
const welcome = () => import('@/views/system/welcome/welcome');
//领导驾驶舱
const leaderDrive = () => import('@/views/system/leader/leaderDrive');
//门禁管理
const doorControl = () =>import("@/views/system/doorControl/doorControl");
    //门禁报表
    const outInStatistics = () =>import("@/views/system/doorControl/outInStatistics");//实时出入统计
    const outInObvierce = () => import("@/views/system/doorControl/outInObvierce");//实时出入监控
    const outInTable = () => import("@/views/system/doorControl/outInTable");//出入明细报表
    const outInWrongTable = () => import("@/views/system/doorControl/outInWrongTable");//异常出入报表
    const QRcodeTable = () => import("@/views/system/doorControl/QRcodeTable");//二维码访客报表
    //门禁权限
    const controlerConfig = () => import("@/views/system/doorControl/controlerConfig");//控制器配置
    const fanQianControl = () => import("@/views/system/doorControl/fanQianControl");//反潜回控制
    const farControl = () => import("@/views/system/doorControl/farControl");//远程控制台
    const blackTable = () => import("@/views/system/doorControl/blackTable");//黑名单
    //访客权限
    const innerVisiter = () => import("@/views/system/doorControl/innerVisiter");//内部门禁访客
    const temporaryVisiter = () => import("@/views/system/doorControl/temporaryVisiter");//临时二维码访客
    //节目二维码票务
    const jieMuTicket = () => import("@/views/system/doorControl/jieMuTicket");//节目票务管理
    const qrCodeRight = () => import("@/views/system/doorControl/qrCodeRight");//二维码访客权限
//系统管理
const systemControl = () => import("@/views/system/systemControl/systemControl");
    //信息管理
    const organization = () => import("@/views/system/systemControl/organization");//组织结构
    const userControl = () => import("@/views/system/systemControl/userControl");//用户管理
    const userBlack = () => import("@/views/system/systemControl/userBlack");//用户黑名单
    const userNumDesign = () => import("@/views/system/systemControl/userNumDesign");//用户编号设置





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
        //欢迎页面  
        {
          path:'/system/',
          name:'welcome',
          component:welcome
        },
        //领导驾驶舱
        {
          path:'/system/leaderDrive',
          name:'leader_drive',
          component:leaderDrive
        },
        //门禁管理
        {
          path: "/system/doorControl",
          name: "door_control",
          component:doorControl,
          children:[
            //门禁报表
            {
              path:'/system/doorControl/',
              name:'outInStatistics',
              component:outInStatistics,
              meta:{
                active:'0-0'
              }
            },
            {
              path:'/system/doorControl/outInObvierce',
              name:'outInObvierce',
              component:outInObvierce,
              meta:{
                active:'0-1'
              }
            },
            {
              path:'/system/doorControl/outInTable',
              name:'outInTable',
              component:outInTable,
              meta:{
                active:'0-2'
              }
            },
            {
              path:'/system/doorControl/outInWrongTable',
              name:'outInWrongTable',
              component:outInWrongTable,
              meta:{
                active:'0-3'
              }
            },
            {
              path:'/system/doorControl/QRcodeTable',
              name:'QRcodeTable',
              component:QRcodeTable,
              meta:{
                active:'0-4'
              }
            },
            //门禁权限
            {
              path:'/system/doorControl/controlerConfig',
              name:'controlerConfig',
              component:controlerConfig,
              meta:{
                active:'1-0'
              }
            },
            {
              path:'/system/doorControl/fanQianControl',
              name:'fanQianControl',
              component:fanQianControl,
              meta:{
                active:'1-1'
              }
            },
            {
              path:'/system/doorControl/farControl',
              name:'farControl',
              component:farControl,
              meta:{
                active:'1-2'
              }
            },
            {
              path:'/system/doorControl/blackTable',
              name:'blackTable',
              component:blackTable,
              meta:{
                active:'1-3'
              }
            },
            //访客权限
            {
              path:'/system/doorControl/innerVisiter',
              name:'innerVisiter',
              component:innerVisiter,
              meta:{
                active:'2-0'
              }
            },
            {
              path:'/system/doorControl/temporaryVisiter',
              name:'temporaryVisiter',
              component:temporaryVisiter,
              meta:{
                active:'2-1'
              }
            },
            //节目二维码票务
            {
              path:'/system/doorControl/jieMuTicket',
              name:'jieMuTicket',
              component:jieMuTicket,
              meta:{
                active:'3-0'
              }
            },
            {
              path:'/system/doorControl/qrCodeRight',
              name:'qrCodeRight',
              component:qrCodeRight,
              meta:{
                active:'3-1'
              }
            }
          ]
        },
        //系统管理
        {
          path: "/system/systemControl",
          name: "systemControl",
          component:systemControl,
          children:[
            //门禁报表
            {
              path:'/system/systemControl/',
              name:'organization',
              component:organization,
              meta:{
                active:'0-0'
              }
            },
            {
              path:'/system/systemControl/userControl',
              name:'userControl',
              component:userControl,
              meta:{
                active:'0-1'
              }
            },
            {
              path:'/system/systemControl/userBlack',
              name:'userBlack',
              component:userBlack,
              meta:{
                active:'0-2'
              }
            },
            {
              path:'/system/systemControl/userNumDesign',
              name:'userNumDesign',
              component:userNumDesign,
              meta:{
                active:'0-3'
              }
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