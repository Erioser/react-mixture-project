import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import lotteryActions from '@/store/modules/lottery/actions'

const reducers = ['lottery']
const actions = {
  'lottery': lotteryActions
}

const customConnect = (reducerParam) => {
  let type = resolveParamType(reducerParam)
  if (type === 'Undefined' || type === 'Null') {
    return connect(
      mkMapStateToProps(),
      mkMapDispatchToProps()
    )
  }
  let param = null
  
  if (type === 'String') {
    param = [ reducerParam ]
  } else {
    param = reducerParam
  }
  return connect(
    mkMapStateToProps(param),
    mkMapDispatchToProps(param)
  )
}

function mkMapStateToProps (param) {
  if (!param) {
    let result = state => state
    return result
  } else {
    let resultFunc = state => {
      let result = {}
      param.forEach(reducer => {   
        let type = resolveParamType(reducer)
        if (type === 'String' && reducers.indexOf(reducer) > -1) {
          result[reducer] = state[reducer]
        }
        if (type === 'Object' && reducers.indexOf(reducer.reducer) > -1) {
          let stateType = resolveParamType(reducer.state)
          if (stateType === 'Undefined' || stateType === 'Null') {
            result[reducer.reducer] = state[reducer.reducer]
          }
          if (stateType === 'String') {
            let r = {}
            r[reducer.state] = state[reducer.reducer][reducer.state]
            result[reducer.reducer] = r
          }
          if (stateType === 'Array') {
            let stateResult = {}
            reducer.state.forEach(_state => {
              stateResult[_state] = state[reducer.reducer][_state]
            })
            result[reducer.reducer] = stateResult
          }  
        }
      })
      return result
    }
    return resultFunc
  }
}

function mkMapDispatchToProps (param) {
  if (!param) {
    let resultFunc = dispatch => {
      let result = {}
      reducers.forEach(reducer => {
        result[`${reducer}_action`] = bindActionCreators(actions[reducer], dispatch)
      })
      return result
    }
    return resultFunc
  } else {
    let resultFunc = dispatch => {
      let result = {}
      param.forEach(reducer => {
        let type = resolveParamType(reducer)
        if (type === 'String' && actions[reducer]) {
          result[`${reducer}_action`] = bindActionCreators(actions[reducer], dispatch)
        }
        if (type === 'Object' && actions[reducer.reducer]) {
          result[`${reducer.reducer}_action`] = bindActionCreators(actions[reducer.reducer], dispatch)
        }
      })
      return result
    }
    return resultFunc
  }
}

function resolveParamType (param) {
  return Object.prototype.toString.call(param).slice(8, -1)
}

// customConnect('lottery')(A)

// customConnect('lottery')(A)

// customConnect(['lottery', 'global'])(A)

// customConnect([{
//   reduer: 'lottery',
//   state: 'types'
// }, 'global'])(A)

// customConnect([{
//   reduer: 'lottery',
//   state: ['types', 'detail']
// }, 'global'])(A)

export default customConnect