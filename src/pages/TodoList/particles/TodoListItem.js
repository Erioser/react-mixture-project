import React, { memo } from 'react'
import { Card, Icon } from 'antd'

const TodoListItem = memo((props) => {
  return (
    <Card
      className="todolist__item"
      title={ props.info.title }
      actions={[
        <Icon type="setting" key="setting" />,
        <Icon type="edit" key="edit" />,
        <Icon type="ellipsis" key="ellipsis" />,
      ]}
    >
      <p>{ props.info.description }</p>
    </Card>
  )

})

export default TodoListItem