import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Row, Col, Typography } from 'antd'
import lotteryActions from '@/store/modules/lottery/actions'

class LotterQueryPage extends Component {
  componentWillMount () {
    if (!this.props.lotteryTypes) {
      this.props.getLotteryTypes()
    }
  }
  render () {
    return (
      <div className="page-container lottery-query-page">
        <Row type="flex" justify="space-between">
          <Col span={12}>
            <Typography.Title level={3}>asdas</Typography.Title>
          </Col>
          <Col span={12}>
            
          </Col>
        </Row>
      </div>
    )
  }
}
const mapStateToProps = state => state.lottery
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(lotteryActions, dispatch)
}
const LotterQueryPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LotterQueryPage)
export default LotterQueryPageContainer