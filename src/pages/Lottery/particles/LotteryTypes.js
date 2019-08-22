import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import lotteryActions from '@/store/modules/lottery/actions'
import connect from '@/store/connect'
import { Radio } from 'antd'

class LotteryTypes extends Component {
  renderLotteryTypes () {
    let { lottery, selectedTypeId, changeSelectedTypeId } = this.props
    if (!lottery.lotteryTypes.length) return ''
    let defaultId = lottery.lotteryTypes[0].lottery_id
    if (!selectedTypeId) changeSelectedTypeId(defaultId)
    return (
      <Radio.Group defaultValue={selectedTypeId || defaultId} buttonStyle="solid">
        {
          lottery.lotteryTypes.map(item => (
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
  componentDidMount () {
    if (!this.props.lottery.lotteryTypes.length) {
      this.props.lottery_action.getLotteryTypes()
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

// const mapStateToProps = (state) => {
//   return state.lottery
// }
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(lotteryActions, dispatch)
// }

// const LotteryTypesContainer = connect(mapStateToProps, mapDispatchToProps)(LotteryTypes)
// export default LotteryTypesContainer

export default connect('lottery')(LotteryTypes)