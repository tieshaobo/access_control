import { fetch } from '@/utils/fetch'

//登录
export const login = (params) => fetch('/login/do', {...params})
//登出
export const loginOut = (params) => fetch('/login/out', {...params})
//登录密码修改
export const changePassword = (params) => fetch('/login/changePassword/do',{...params})
//获取登录信息
export const loginInfo = (params) => fetch('/login/info',{...params})
//修改登录信息
export const loginEidt = (params) => fetch('/login/eidt',{...params})
//查看所有登录者信息
export const loginPageList = (params) => fetch('/login/pageList',{...params})