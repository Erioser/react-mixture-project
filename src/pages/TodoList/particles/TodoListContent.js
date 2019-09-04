import React, { useState, Suspense, memo } from 'react'
import { Row, Col, Pagination, Spin, Empty } from 'antd'
import { useTodolistStoreContext } from '@/hooks/todolist'

import TodoListItem from './TodoListItem'

const TodoListContent = memo((props) => {
  let [items] = useTodolistStoreContext('items')
  let [page, setPage] = useState(1)
  let pageSize = 8

  function renderItems () {
    if (!items.length) return <Empty />
    
    let renderItems = items.slice(
      (page - 1) * pageSize,
      page * pageSize
    )
    return renderItems.map((item) => (
      <Col className="todolist__item-col" key={item.id} span={24 / (pageSize / 2)}>
        <TodoListItem editAction={props.editAction} info={item}/>
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
})

export default TodoListContent