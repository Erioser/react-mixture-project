import React, { Component } from 'react'
import { Table } from 'antd'
import { Link } from 'react-router-dom'
class LotteryHistoryTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      columns: [
        { title: '编号', dataIndex: 'lottery_no', key: 'lottery_no' },
        { title: '结果', dataIndex: 'lottery_res', key: 'lottery_res' },  
        { title: '开奖日期', dataIndex: 'lottery_date', key: 'lottery_date' },
        { title: '兑奖截止日期', dataIndex: 'lottery_exdate', key: 'lottery_exdate' },
        { title: '本期销售额', dataIndex: 'lottery_sale_amount', key: 'lottery_sale_amount' },
        { title: '奖池滚存', dataIndex: '', key: 'x' },
        {
          title: '操作',
          dataIndex: 'control',
          key: 'control',
          render: (text, row) => {
            return <Link to={`/lottery/detail/${row.lottery_id}/${row.lottery_no}`}>查看详情</Link>
          }
        }
      ]
    }
  }
  
  render () {
    let { columns } = this.state
    let { dataSource } = this.props 
    return (
      <div className="lottery-history__table">
        <Table pagination={false} dataSource={dataSource} columns={columns} />
      </div>
    )
  }
}
export default LotteryHistoryTable