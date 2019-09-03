import React from 'react'
import { Typography } from 'antd'

import { useTodoListGetters } from '@/hooks/todolist'

const TodoListDes = () => {
  let [ state ] = useTodoListGetters()
  return (
    <Typography.Paragraph>
      { state.description }
    </Typography.Paragraph>
  )
}

export default TodoListDes