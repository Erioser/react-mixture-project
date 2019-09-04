import React, { memo } from 'react'
import { Card, Icon, Typography } from 'antd'
import { useTodolistStoreContext } from '@/hooks/todolist'
const TodoListItem = memo((props) => {
  const [state, actions] = useTodolistStoreContext()

  let { title, description, finished, id } = props.info
  let color = finished ? '#1890ff' : '#ccc'

  function finishAction () {
    actions.finishTodo({ id })
  }
  function deleteAction () {
    actions.deleteTodo({ id })
  }
  function editAction () {
    props.editAction(props.info)
  }
  
  return (
    <Card
      className={`todolist__item ${ finished ? 'finished' : '' }`}
      title={ title }
      extra={<Icon type="check-circle" style={{ fontSize: '24px', color }}/>}
      actions={[
        <Icon onClick={finishAction} type="check" key="check" />,
        <Icon onClick={editAction} type="edit" key="edit" theme="filled" />,
        <Icon onClick={deleteAction} type="delete" key="delete" theme="filled" />,
      ]}
    >
      <Typography.Paragraph ellipsis={{ rows: 5 }}>{ description }</Typography.Paragraph>
    </Card>
  )

})

export default TodoListItem