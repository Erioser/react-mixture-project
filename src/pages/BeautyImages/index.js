import React, { Component } from 'react'
import { message, Typography, Button, Icon, Spin } from 'antd'
import './index.scss'
import BeautyImageContent from './particles/BeautyImageContent'
import { apiGetBeautyImages } from '@/api'
class BeautyImagesPage extends Component {

  constructor (props) {
    super(props)
    this.state = {
      images: [],
      page: 1,
      pageSize: 10,
      hasMore: true,
      loading: false
    }
    this.handlePageAction = this.handlePageAction.bind(this)
  }
  handlePageAction (type) {
    this.setState((state) => {
      let page = state.page + (type === 'prev' ? -1 : 1)
      if (page === 0) page = 1
      return { page }
    })
  }
  async getBeautyImages () {
    let { page, pageSize } = this.state
    this.setState({ loading: true })
    apiGetBeautyImages({
      page, count: pageSize
    }).then(({data}) => {
      if (data.code !== 200) return false
      this.setState((state, props) => {
        return {
          hasMore: !!data.result.length,
          images: data.result.length ? data.result : state.images,
          loading: false
        }
      })
      if (!data.result.length) {
        message.warning('抱歉已经没有更多的美图了');
      } else {
        message.success('成功获取到最新的美图');
      }
    }).catch (e => {
      message.error('不好意思出错了')
      this.setState({ loading: false })
    })
  }
  componentDidMount () {
    this.getBeautyImages()
    console.log('componentDidMount')
  }
  shouldComponentUpdate (props, state) {
    if (state.page !== this.state.page) {
      this.getBeautyImages()
      console.log('shouldComponentUpdate')
    }
    return true
  }
  render () {
    let  { page, images, hasMore, loading } = this.state
    return (
      <div className="page-container beauty-images-page">
        <Typography.Title level={3}>
          美图推荐
        </Typography.Title>
        <Spin spinning={loading}>
        <BeautyImageContent dataSource={images}/>
        </Spin>
        <Button.Group className="beauty-images__pagination" size={100}>
          <Button disabled={!!(page === 1)} onClick={() => { this.handlePageAction('prev') }} type="primary">
            <Icon type="left" />
            上一页
          </Button>
          <Button>{page}</Button>
          <Button disabled={!hasMore} onClick={() => { this.handlePageAction('next') }} type="primary">
            下一页
            <Icon type="right" />
          </Button>
        </Button.Group>
      </div>
    )
  }
}

export default BeautyImagesPage