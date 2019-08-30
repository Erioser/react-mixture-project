
import request from '@/utils/request'


// 获取ip地址
export const apiGetIpAddress = () => {
  return request.get('http://pv.sohu.com/cityjson?ie=utf-8')
}

// 根据ip获取城市信息
export const apiGetCityInfoByIp = () => {
  return request.get('http://ip-api.com/json/?lang=zh-CN')
}

// 获取天气
export const apiGetWeather = (params = {}) => {
  return request.get('/old-apiopen/weatherApi', { params })
}
