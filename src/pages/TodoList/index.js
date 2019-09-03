import React, { useContext, useEffect } from 'react'
import './index.scss'
import { Typography, Button } from 'antd'
import GlobalContext from '@/components/GlobalContext'

import TodoListContent from './particles/TodoListContent'
import TodoListDes from './particles/TodoListDes'

const TodoListPage = (props) => {

  const global = useContext(GlobalContext)

  useEffect(() => {
    if (global.city)  console.log('当前城市:' + global.city)
  }, [global.city])

  return (
    <div className="page-container todolist-page">
      <Typography>
        <Typography.Title level = {3}>待办事项</Typography.Title>
        <TodoListDes/>
        <Button className="create-btn" type="primary" shape="circle" icon="plus" size="large" />
      </Typography>

      <TodoListContent/>
    </div>
  )
  
}

export default TodoListPage