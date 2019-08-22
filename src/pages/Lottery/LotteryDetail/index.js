import React, { Component } from 'react'
import { apiGetLotteryQuery } from '@/api'
import { Typography, Divider, Table } from 'antd'
const { Title, Paragraph, Text } = Typography

class LotteryDetailPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      detail: null,
      columns: [
        { title: '奖项名称', dataIndex: 'prize_name', key: 'prize_name' },
        { title: '中奖数量', dataIndex: 'prize_num', key: 'prize_num' },
        { title: '中奖金额', dataIndex: 'prize_amount', key: 'prize_amount' },
        { title: '中奖条件', dataIndex: 'prize_require', key: 'prize_require' }
      ]
    }
  }
  componentWillMount () {
    let { id, no } = this.props.match.params
    if (id && no) {
      apiGetLotteryQuery({
        lottery_id: id,
        lottery_no: no
      }).then(({data}) => {
        if (data.error_code !== 0) return false
        this.setState({
          detail: data.result
        })
      })
    } 
  }
  renderBasicInfo () {
    let { detail } = this.state
    if (!detail) return ''
    return (
      <Typography>
        <Title level={3}>彩票详情:</Title>
        <Paragraph>开奖期号: <Text>{detail.lottery_no}</Text></Paragraph>
        <Paragraph>彩票名称: <Text>{detail.lottery_name}</Text></Paragraph>
        <Paragraph>开奖日期: <Text>{detail.lottery_date}</Text></Paragraph>
        <Paragraph>兑奖截止日期: <Text>{detail.lottery_exdate}</Text></Paragraph>
        <Paragraph>销售数额: <Text>{detail.lottery_sale_amount}</Text></Paragraph>
        <Paragraph>奖池滚存: <Text>{detail.lottery_pool_amount}</Text></Paragraph>
      </Typography>
    )
  }
  render () {
    let { detail, columns } = this.state
    return (
      <div className="page-container lottery-detail-page">
        {this.renderBasicInfo()}
        <Divider/>
        <Table pagination={false} dataSource={detail ? detail.lottery_prize : []} columns={columns} />
      </div>
    )
  }
}
export default LotteryDetailPage