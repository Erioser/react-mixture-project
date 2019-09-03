import React, { BasicPureComponent } from '@/service/BasicComponent'

import BeautyImageItem from './BeautyImageItem'

class BeautyImageContent extends BasicPureComponent {
  renderItems () {
    let { dataSource } = this.props
    if (!dataSource.length) return false
    // return dataSource.map((item) => (
    //   <Col className="beauty-image__item-col" key={item.id} span={6}>
    //     <BeautyImageItem info={item}/>
    //   </Col> 
    // ))
    return dataSource.map((item) => (
      <BeautyImageItem key={item.id} info={item}/>
    ))
  }
  render () {
    return (
      <div className="beauty-images__content">
        { this.renderItems() } 
      </div>
    )
  }
}
export default BeautyImageContent