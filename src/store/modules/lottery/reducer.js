import _ from 'lodash'

const state = {
  lotteryTypes: []
}

const reducer = (previousStat = state, {type, payload}) => {
  let newState = _.cloneDeep(state)
  switch (type) {
    case 'SET_LOTTERY_TYPES': 
      newState.lotteryTypes = payload.lotteryTypes
      break
    default: break
  }
  return newState
}
export default reducer