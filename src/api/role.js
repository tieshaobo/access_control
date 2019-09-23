import { fetch } from '@/utils/fetch'

//9.1	分页查询角色列表
export const rolePageList = (params) => fetch('/role/pageList/1/20', {...params});

//9.2	增加角色
export const addRole = (params) => fetch('/role/add', {...params});
