import React from 'react'
import { Card, Icon } from 'antd'
const { Meta } = Card

const BeautyImageItem = (props) => {
  let { id, time, img } = props.info
  return (
    <Card
      className="beauty-images__item"
      cover={
        <img
          alt="example"
          src={img}
        />
      }
      actions={[
        <Icon type="setting" key="setting" />
      ]}
    >
      <Meta title={time}/>
    </Card>
  )
}

export default BeautyImageItem