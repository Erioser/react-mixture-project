import _ from 'lodash'
import { List } from 'immutable'
const state = {
  lotteryTypes: []
}
const reducer = (previousState = state, {type, payload}) => {
  let _state = _.cloneDeep(previousState)
  switch (type) {
    case 'SET_LOTTERY_TYPES': 
      _state.lotteryTypes = payload.lotteryTypes
      return _state
    default: 
      return _state
  }
  
}
export default reducer