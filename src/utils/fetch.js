/**
 * Created by DELL on 2019/5/31.
 */
import axios from 'axios'
const buseUrl = 'http://172.20.5.101:8000'
export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    // url = buseUrl + url
    axios.post(url, params)
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  })
}
export function postFormdata(url, params) {
  return new Promise((resolve, reject) => {
    // url = buseUrl + url
    axios.post(url, params)
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  })
}

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    // url = buseUrl + url
    axios.get(url, {
      params
    }).then(res => resolve(res.data))
      .catch(err => reject(err))
  })
}

/*
*put 请求方法
* @param url
* @param params
* @returns {Promise}
 */
export function put(url, params = {}) {
  return new Promise((resolve, reject) => {
    // url = buseUrl + url
    axios.put(url, params)
      .then(response => {
        resolve(response.data)
      }).catch(err => {
        reject(err)
      })
  })
}