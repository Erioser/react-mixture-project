

import React, { Component } from 'react'
import { is } from 'immutable'
import { BasicDecorator } from '@/decorators'

@BasicDecorator
class BasicComponent extends Component {
  _shouldComponentUpdate (nextProps = {}, nextState = {})  {
    const thisProps = this.props || {}, thisState = this.state || {}

    //判断长度是否改变，长度改变的话，数据一定改一定需要重新渲染
      if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
          Object.keys(thisState).length !== Object.keys(nextState).length) {
      return true
    }

  //当原数据和next的数据长度一致时需要遍历循环比较
    for (const key in nextProps) {
      if (!is(thisProps[key], nextProps[key])) {
        return true
      }
    }

    for (const key in nextState) {
      if (thisState[key] !== nextState[key] || !is(thisState[key], nextState[key])) {
        return true
      }
    }
    return false
  }
}


export {
  BasicComponent
}
export default React