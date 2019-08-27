import React, { Component } from 'react'
import { Col, Row } from 'antd'

import BeautyImageItem from './BeautyImageItem'

class BeautyImageContent extends Component {
  renderItems () {
    let { dataSource } = this.props
    if (!dataSource.length) return false
    return dataSource.map((item) => (
      <Col className="beauty-image__item-col" key={item.id} span={6}>
        <BeautyImageItem info={item}/>
      </Col> 
    ))
  }
  render () {
    return (
      <div className="beauty-images__content">
        <Row gutter={16}>
          { this.renderItems() }
        </Row>     
      </div>
    )
  }
}
export default BeautyImageContent