
import request from '@/utils/request'

import {
  lotteryTypes
} from '@/api/lottery-mock'

const lotteryKey = '21257cf37e7c106a09fcc5cadd115995'

export const apiGetLotteryTypes = (params = {}) => {
  console.log('request:apiGetLotteryTypes')
  // params.key = lotteryKey
  // return request.get('/lottery/types', { params })
  return new Promise(resolve => {
    resolve(lotteryTypes)
  })
}

export const apiGetLotteryBonus = (params = {}) => {
  params.key = lotteryKey
  return request.get('/lottery/bonus', { params })
}

// lottery_id	是	string	彩票ID
// lottery_no	否	string	彩票期号，默认最新一期
export const apiGetLotteryQuery = (params = {}) => {
  params.key = lotteryKey
  return request.get('/lottery/query', { params })
  // return new Promise(resolve => {
  //   resolve(detail)
  // })
}

// lottery_id	是	string	彩票ID
// page_size	否	string	每次返回条数，默认10，最大50
// page	否	string	当前页数，默认1
export const apiGetLotteryHistory = (params = {}) => {
  params.key = lotteryKey
  return request.get('/lottery/history', { params })
}
