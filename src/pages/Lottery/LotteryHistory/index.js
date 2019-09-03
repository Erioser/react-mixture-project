import React, { BasicPureComponent } from '@/service/BasicComponent'
import './index.scss'
import { Divider, Pagination } from 'antd'
import { apiGetLotteryHistory } from '@/api'
import LotteryTypes from '@/pages/Lottery/particles/LotteryTypes'
import LotteryHistoryTable from '@/pages/Lottery/LotteryHistory/particles/LotteryHistoryTable'

class LotteryHistoryPage extends BasicPureComponent {
  constructor (props) {
    super(props)
    this.state = {
      selectedTypeId: null,
      histories: [],
      page: 1,
      pageSize: 10,
      total: 85
    }
    this.changeSelectedTypeId = this.changeSelectedTypeId.bind(this)
    this.pageChangeAction = this.pageChangeAction.bind(this)
  }
  
  changeSelectedTypeId (id) {
    this.setState({ selectedTypeId: id, page: 1 })
  }
  pageChangeAction (page, pageSize) {
    this.setState({ page })
  }
  async getHistories () {
    let { selectedTypeId, pageSize, page } = this.state
    try {
      let data = await apiGetLotteryHistory({
        lottery_id: selectedTypeId,
        page_size: pageSize,
        page: page
      })
      if (data.error_code !== 0) return false
      this.setState({
        histories: data.result.lotteryResList,
        total: data.result.totalPage
      })
    } catch (e) { console.log(e) }
  }
  componentDidUpdate (props, state) {
    if (state.selectedTypeId !== this.state.selectedTypeId) {
      this.getHistories()
    }
    if (state.page !== this.state.page) {
      this.getHistories()
    }
  }
  render () {
    let  { selectedTypeId, histories, page, pageSize, total } = this.state
    return (
      <div className="page-container lottery-history-page">
          <LotteryTypes
          changeSelectedTypeId = {this.changeSelectedTypeId}
          selectedTypeId = {selectedTypeId}/>
          <Divider/>
          <LotteryHistoryTable dataSource = {histories}/>
          <Divider/>
          <Pagination
            total={total}
            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
            pageSize={pageSize}
            current={page}
            onChange={this.pageChangeAction}
          />
      </div>
    )
  }
}
export default LotteryHistoryPage