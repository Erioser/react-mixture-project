import React, { useState, Suspense } from 'react'
import { Row, Col, Pagination, Spin } from 'antd'
import { useTodoListItems } from '@/hooks/todolist'
import TodoListItem from './TodoListItem'

const TodoListContent = (props) => {
  let [page, setPage] = useState(1)
  let [items] = useTodoListItems('items')
  let pageSize = 8


  function renderItems () {
    if (!items.length) return false
    
    let renderItems = items.slice(
      (page - 1) * pageSize,
      page * pageSize
    )
    return renderItems.map((item) => (
      <Col className="todolist__item-col" key={item.id} span={24 / (pageSize / 2)}>
        <TodoListItem info={item}/>
      </Col> 
    ))
  }

  return (
    <div className="todolist-content">
      <Row gutter={16} className="todolist-content__container">
        <Suspense fallback={<Spin/>}>{ renderItems() }</Suspense>
      </Row>
      <Pagination
        total={items.length}
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        pageSize={pageSize}
        current={page}
        onChange={(page) => setPage(page)}
      />
    </div>
  )
}

export default TodoListContent