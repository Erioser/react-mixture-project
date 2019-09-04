
import { apiGetLotteryTypes } from '@/api'
import * as types from './types'

export default {
  getLotteryTypes () {
    return async function (dispatch) {
      let data = await apiGetLotteryTypes()
      if (data.error_code !== 0) return false
      dispatch({
        type: types.SET_LOTTERY_TYPES,
        payload: {
          lotteryTypes: data.result
        }
      })    
    }
  }
}