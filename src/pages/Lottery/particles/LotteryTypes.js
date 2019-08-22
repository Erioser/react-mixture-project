import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import lotteryActions from '@/store/modules/lottery/actions'

import { Radio } from 'antd'

class LotteryTypes extends Component {
  renderLotteryTypes () {
    let { lotteryTypes, selectedTypeId, changeSelectedTypeId } = this.props
    if (!lotteryTypes.length) return ''
    let defaultId = lotteryTypes[0].lottery_id
    if (!selectedTypeId) changeSelectedTypeId(defaultId)
    return (
      <Radio.Group defaultValue={selectedTypeId || defaultId} buttonStyle="solid">
        {
          lotteryTypes.map(item => (
            <Radio.Button onClick={this.handleButtonClick.bind(this, item)} key={item.lottery_id} value={item.lottery_id}>{item.lottery_name}</Radio.Button>
          ))
        }
      </Radio.Group>
    )
  }
  handleButtonClick (item) {
    let { changeSelectedTypeId } = this.props
    changeSelectedTypeId(item.lottery_id)
  }
  componentWillMount () {
    if (!this.props.lotteryTypes.length) {
      this.props.getLotteryTypes()
    }
  }
  render () {
    return (
      <div className="lottery-types__container">
        <div className="lottery-types__buttons">
          { this.renderLotteryTypes() }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.lottery
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(lotteryActions, dispatch)
}

const LotteryTypesContainer = connect(mapStateToProps, mapDispatchToProps)(LotteryTypes)
export default LotteryTypesContainer