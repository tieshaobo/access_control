import { fetch } from '@/utils/fetch'

//8.1	查询菜单资源列表
export const menuPageList = (params) => fetch('/res/pageList', {...params});

//8.2	增加菜单资源
export const addMenu = (params) => fetch('/res/add', {...params});

//8.3	获取菜单资源详情 by  id
export const getMeunInfoById = (params) => fetch('/res/info', {...params});

//8.4	修改菜单资源
export const changeMenu = (params) => fetch('/res/edit', {...params});

//8.5	删除菜单资源 by  ids
export const deleteMenu = (params) => fetch('/res/delete', {...params});

//8.6	启用/禁用菜单资源 by  ids
export const enabledMenu = (params) => fetch('/res/enabled', {...params});

//8.7	获取菜单资源 by  roleId
export const getMeunInfoByRoleId = (params) => fetch('/res/getResList', {...params});



