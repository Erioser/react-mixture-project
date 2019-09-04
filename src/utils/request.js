/**
 * 业务中使用的ajax请求工具模块
 * @module utils/request
 * @see main.js
 */

import axios from 'axios'
import config from '../config/axios.config'

// 构建得的请求对象
const request = axios.create(config)
// 请求拦截器
request.interceptors.request.use(
  config => {
    // 触发loading效果
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 返回状态判断(添加响应拦截器)
request.interceptors.response.use(
  (res) => {
    // 主动控制是否弹出提示
    // 成功
   
    return res.data
  },
  (error, a, b) => {
    
    return error
  }
)

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
export default request
