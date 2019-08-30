import React from 'react'
import { Card, Icon } from 'antd'
import Zmage from 'react-zmage'
import moment from 'moment'
const { Meta } = Card

const BeautyImageItem = (props) => {
  let { time, img } = props.info
  let timeText = moment(time).format('YYYY-MM-DD HH:mm:ss')
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
      <Meta title={timeText}/>
    </Card>
  )
}

export default BeautyImageItem