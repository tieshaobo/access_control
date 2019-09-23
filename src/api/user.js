import { fetch } from '@/utils/fetch'

//2.1	分页查询用户列表
export const userPageList = (params) => fetch('/user/pageList/1/20', {...params});

//2.2	获取用户信息 by  id
export const userInfo = (params) => fetch('/user/info', {...params});

//2.3	增加用户信息
export const userAdd = (params) => fetch('/user/add', {...params});

//2.4	编辑用户信息
export const userEdit = (params) => fetch('/user/edit', {...params});

//2.5	检查编号是否已经存在 by  empNo
export const userCheckEmpNo = (params) => fetch('/user/check/empNo', {...params});

//2.6	检查卡号是否已经存在 by  cardNo
export const userCheckCardNo = (params) => fetch('/user/check/cardNo', {...params});

//2.7	删除用户信息 by  ids
export const userDelete = (params) => fetch('/user/delete', {...params});

//2.8	批量审核（通过/不通过）用户by  ids
export const userPassCheck = (params) => fetch('/user/passCheck', {...params});

//2.9	查询用户列表 by  controllerId
export const userFindByControllerId = (params) => fetch('/user/findByControllerId', {...params});

//2.10	查询用户信息by  empNo
export const userFindByEmpNo = (params) => fetch('/user/findByEmpNo', {...params});

//2.11	用户信息列表导出
export const userListExport = (params) => fetch('/user/list/export', {...params});

//2.12	用户头像导出
export const userHeadImageExport = (params) => fetch('/user/headImage/export', {...params});

//2.13	用户头像上传
//export const userHeadImageExport = (params) => fetch('/uploadHeadImage/', {...params});

//2.14	获取黑名单用户列表
export const userBlackPageList = (params) => fetch('/user/blackPageList/1/20', {...params});

//2.15	用户加入黑名单
export const userAddBlack = (params) => fetch('/user/addBlack', {...params});

//2.16	用户从黑名单中移除 by  ids
export const userDelBlack = (params) => fetch('/user/delBlack', {...params});

//









