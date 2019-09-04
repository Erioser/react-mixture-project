import { Map, List } from 'immutable'

import * as types from './types'

// const state = {
//   lotteryTypes: []
// }
const state = Map({
  lotteryTypes: List()
})
const reducer = (previousState = state, {type, payload}) => {
  // let _state = _.cloneDeep(previousState)
  // switch (type) {
  //   case 'SET_LOTTERY_TYPES': 
  //     _state.lotteryTypes = payload.lotteryTypes
  //     return _state
  //   default: 
  //     return _state
  // }
  switch (type) {
    case types.SET_LOTTERY_TYPES: 
      return previousState.set('lotteryTypes', List(payload.lotteryTypes))
    default: 
      return previousState
  }
  
}
export default reducer