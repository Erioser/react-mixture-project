import React from 'react'
import { Card, Icon } from 'antd'
import Zmage from 'react-zmage'
const { Meta } = Card

const BeautyImageItem = (props) => {
  let { id, time, img } = props.info
  return (
    <Card
      className="beauty-images__item"
      cover={
        <Zmage
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