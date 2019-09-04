import React, { memo } from 'react'
import { Typography } from 'antd'

import { useTodolistStoreContext } from '@/hooks/todolist'

const TodoListDes = memo(() => {
  let [detail] = useTodolistStoreContext('todoDetail')
  return (
    <Typography.Paragraph>
      { detail.description }
    </Typography.Paragraph>
  )
})

export default TodoListDes