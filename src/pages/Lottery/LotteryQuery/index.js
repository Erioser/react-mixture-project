import React, { BasicComponent } from '@/service/BasicComponent'
import { Row, Col, Typography, Result, Icon, Spin, Alert } from 'antd'
import LotteryQueryForm from './particles/LotteryQueryForm'
import LotteryQueryInfo from './particles/LotteryQueryInfo'
import './index.scss'
class LotterQueryPage extends BasicComponent {
  constructor (props) {
    super(props)
    this.state = {
      lotteryResult: null,
      isFirst: true,
      loading: false
    }
    this.getLotteryResult = this.getLotteryResult.bind(this)
  }
  getLotteryResult ({ result = null, loading }) {
    let params = { loading }
    if (result) params.lotteryResult = result
    if (this.state.isFirst) params.isFirst = false
    this.setState(params)
  }

  renderContent () {
    const { lotteryResult, loading, isFirst } = this.state
    if (isFirst) return (
      <Result
        icon={<Icon type="smile" theme="twoTone" />}
        title="快点开始查询吧～"
      />
    )

    if (loading) return  (
      <div className="loading__congtainer">
        <Spin size="large" />
      </div>
    )
    console.log(lotteryResult, 111)
    if (lotteryResult && typeof lotteryResult !== 'string') {
      return <LotteryQueryInfo data={this.state.lotteryResult}/>
    }
    if (lotteryResult && typeof lotteryResult === 'string') {
      
      return (<Alert
        message="错误信息"
        description={lotteryResult}
        type="error"
      />)
    }
    return (<Alert
      description="抱歉，没有查到对应的数据"
      type="info"
    />)
  }

  render () {
    
    return (
      <div className="page-container lottery-query-page">
        <Row type="flex" justify="space-between">
          <Col span={6}>
            <Typography.Title level={4}>请填写彩票信息</Typography.Title>
            <LotteryQueryForm getLotteryResult = {this.getLotteryResult}/>
          </Col>
          <Col span={16}>
            <Typography.Title level={4}>查询结果</Typography.Title>
            <div className="lottery-query__content">
              { this.renderContent() }
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default LotterQueryPage