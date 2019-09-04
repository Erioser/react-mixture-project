import React, { useEffect, useState } from 'react'
import './index.scss'
import { Typography, Button } from 'antd'
import { useTodolistStoreContext } from '@/hooks/todolist'

import TodoListContent from './particles/TodoListContent'
import TodoListDes from './particles/TodoListDes'
import TodoListCAE from './particles/TodoListCAE'

const TodoListPage = (props) => {
  const [items, actions] = useTodolistStoreContext('items')
  let [visible, setVisible] = useState(false)
  let [editItem, setEditItem] = useState(null)
  
  useEffect(() => {
    if (!items.length) actions.getInitialItems()
  })

  function toggleVisible () {
    setVisible((visible) => !visible)
    setEditItem(null)
  }
  function editAction (item) {
    setVisible((visible) => !visible)
    setEditItem(item)
  }

  return (
    <div className="page-container todolist-page">
      <Typography>
        <Typography.Title level = {3}>待办事项</Typography.Title>
        <TodoListDes/>
        <Button onClick={toggleVisible} className="create-btn" type="primary" shape="circle" icon="plus" size="large" />
      </Typography>
      <TodoListCAE editItem={editItem} visible={visible} toggleVisible={toggleVisible}/>
      <TodoListContent editAction={editAction} toggleVisible={toggleVisible}/>
    </div>
  )
  
}

export default TodoListPage