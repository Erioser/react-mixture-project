
import {
  apiGetLotteryTypes
} from '@/api'

export default {
  getLotteryTypes () {
    return function (dispatch) {
      apiGetLotteryTypes().then(data => {
        if (data.error_code !== 0) return false
        dispatch({
          type: 'SET_LOTTERY_TYPES',
          payload: {
            lotteryTypes: data.result
          }
        })        
      }) 
    }
  }
}