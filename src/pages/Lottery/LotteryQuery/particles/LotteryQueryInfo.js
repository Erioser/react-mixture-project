import React, { BasicComponent } from '@/service/BasicComponent'
import { Table, Typography } from 'antd'

const { Paragraph, Text } = Typography

class LotteryQueryInfo extends BasicComponent {
  constructor (props) {
    super(props)
    this.state = {
      columns: [
        { title: '中奖奖项', dataIndex: 'prize_name', key: 'prize_name' },
        { title: '中奖注数', dataIndex: 'prize_num', key: 'prize_num' },  
        { title: '中奖条件', dataIndex: 'prize_require', key: 'prize_require' },
        { title: '单注奖金', dataIndex: 'prize_money', key: 'prize_money' }
      ]
    }
  }
  renderBasicInfo () {
    let data = this.props.data
    return (
      <Typography>
        <Paragraph>开奖期号: <Text>{data.lottery_no}</Text></Paragraph>
        <Paragraph>彩票名称: <Text>{data.lottery_name}</Text></Paragraph>
        <Paragraph>开奖日期: <Text>{data.lottery_date}</Text></Paragraph>
        <Paragraph>投注号码: <Text>{data.lottery_res}</Text></Paragraph>
        <Paragraph>开奖号码: <Text>{data.real_lottery_res}</Text></Paragraph>
        <Paragraph>投注金额: <Text>{data.in_money}</Text></Paragraph>

        <Paragraph>投注红球数目: <Text>{data.buy_red_ball_num}</Text></Paragraph>
        <Paragraph>投注蓝球数目: <Text>{data.buy_blue_ball_num}</Text></Paragraph>
        <Paragraph>命中红球数目: <Text>{data.hit_red_ball_num}</Text></Paragraph>
        <Paragraph>命中蓝球数目: <Text>{data.hit_blue_ball_num}</Text></Paragraph>

        <Paragraph>中奖消息: <Text>{data.prize_msg}</Text></Paragraph>
      </Typography>
    )
  }
  render () {
    let { columns } = this.state
    let { lottery_prize } = this.props.data 
    return (
      <div className="lottery-query__table">
        { this.renderBasicInfo() }
        {
          lottery_prize ? <Table pagination={false} dataSource={lottery_prize} columns={columns} /> : ''
        } 
      </div>
    )
  }
}
export default LotteryQueryInfo

// for(var i = 0; i < 5; i++) {
//   for(var j = 0; j < 5; j++) {
//     console.log(i + j)
//   }
// }