
import {
  apiGetLotteryTypes
} from '@/api'

export default {
  getLotteryTypes () {
    return async function (dispatch) {
      let data = await apiGetLotteryTypes()
      if (data.error_code !== 0) return false
      dispatch({
        type: 'SET_LOTTERY_TYPES',
        payload: {
          lotteryTypes: data.result
        }
      })    
    }
  }
}