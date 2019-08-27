import React, { Component } from 'react'
import { Typography, Pagination } from 'antd'
import './index.scss'
import BeautyImageContent from './particles/BeautyImageContent'
import { apiGetBeautyImages } from '@/api'
class BeautyImagesPage extends Component {

  constructor (props) {
    super(props)
    this.state = {
      images: [],
      page: 1,
      pageSize: 8
    }
    this.pageChangeAction = this.pageChangeAction.bind(this)
  }
  pageChangeAction (page, pageSize) {
    this.setState({ page })
  }
  async getBeautyImages () {
    let { page, pageSize } = this.state
    apiGetBeautyImages({
      page, count: pageSize
    }).then(({data}) => {
      if (data.code !== 200) return false
      this.setState({ images: data.result })
    })
  }
  componentDidMount () {
    this.getBeautyImages()
  }
  render () {
    let  { page, pageSize, images } = this.state
    return (
      <div className="page-container beauty-images-page">
        <Typography.Title level={3}>
          美图推荐
        </Typography.Title>

        <BeautyImageContent dataSource={images}/>

        <Pagination
            pageSize={pageSize}
            current={page}
            onChange={this.pageChangeAction}
          />
      </div>
    )
  }
}

export default BeautyImagesPage