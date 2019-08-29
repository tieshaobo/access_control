/**
 * Created by DELL on 2019/6/19.
 */
import axios from 'axios'
import qs from 'qs'
import vm from '@/main'

const tokenArray = ['/api/ad-uua/oauth/token']
const env = process.env.NODE_ENV
const apis = ['/tx-ad-service']

axios.defaults.timeout = 30000

axios.interceptors.request.use(
  config => {
    // console.log(config)
    if (apis.some(item => config.url.match(item))) {
      config.url = '/api' + config.url
    }
    const isToken = tokenArray.indexOf(config.url) !== -1
    if (!isToken) {
      const accessToken = localStorage.getItem('access_token')
      const tokenType = 'bearer'
      if (accessToken) {
        config.headers['Authorization'] = tokenType + ' ' + accessToken
        if(config.url.includes('/tx-ad-service/2/')) {
          config.headers['currentRole'] = "advertiser"
        }
      }
    } else {
      // config.data = qs.stringify(config.data)
    }
    return config
  }, (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (res) => {
    // console.log(res)
    const isToken = tokenArray.indexOf(res.config.url) !== -1
    if (isToken) return res
    let code = String(res.data.code)
    if (code === '0') return res
    // 弹出错误信息
    vm.$message.warning(res.data.msg || res.data.remark || res.data.message || '未知错误')
    // 未登录
    if (code === '100003') {
      let exceptArr = ['/joinSteps']
      let path = vm.$route.fullPath
      if (exceptArr.map(item => path.includes(item)).some(item => item)) return res
      vm.$router.push({ path: '/signin' })
    }
    return res
  }, function (err) {
    // console.log("err", err)
    try {
      let code = String(err.response.data.code)
      if (code === '610') {  // token 已过期，重定向到登录页面
        localStorage.removeItem('access_token')
        vm.$store.commit('SET_USERNAME', '')
        vm.$store.commit('SET_USERINFOTYPE', '')
        vm.$message.info('请重新登录~')
        vm.$router.push({ path: '/signin' })
      } else if (code === '1000001') {  // 未登陆

      } else {
        vm.$message.error(`${err.error}: ${err.message}`)
      }
    } catch (error) {
      // console.log(Object.keys(err))
      // console.log(err.toJSON())
      vm.$message.error(err.message || '未知错误')
    }
    return Promise.reject(err)
  }
)
