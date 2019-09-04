import React, { useEffect, useState, useRef } from 'react'
import { Button, Drawer, Form, Input } from 'antd';
import { useTodolistStoreContext } from '@/hooks/todolist'

const { TextArea } = Input

const TodoListFormUI = (props) => {
  const [state, actions] = useTodolistStoreContext()

  const { toggleVisible, form } = props
  const { getFieldDecorator } = form

  function handleCancel () {
    toggleVisible()
    form.resetFields()
  }
  function handleOk () {
    form.validateFields((err, values) => {
      if (!err) {
        if (!props.editItem) {
          actions.createTodoItem({ item: values })
        } else {
          actions.updateTodoItem({ item: { ...values, id: props.editItem.id } })
        }
        
        toggleVisible()
        form.resetFields()
      }
    })
  }

  useEffect(() => {
    if (props.editItem) {
      let { title, description } = props.editItem
      form.setFieldsValue({ title, description })
    } else {
      form.resetFields()
    }
  }, [props.editItem])

  return (
    <Form layout="vertical">
      <Form.Item label="Title">
        {getFieldDecorator('title', {
          rules: [{ required: true, message: '事项标题不能为空！' }],
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Description">
        {getFieldDecorator('description', {
          rules: [{ required: true, message: '事项内容不能为空！' }],
        })(<TextArea autosize={{ minRows: 15 }} type="textarea" />)}
      </Form.Item>
      <Form.Item >
        <Button onClick={handleOk} type="primary" >
          保存
        </Button>
        <Button type="default" onClick={handleCancel}>
          取消
        </Button>
      </Form.Item>
    </Form>
  )
}

const TodoListForm = Form.create({ name: 'todolist-form' })(TodoListFormUI)

const TodoListCAE = (props) => {
  const { visible, toggleVisible } = props
  let [title, setTitle] = useState('')
  const form = useRef(null)

  useEffect(() => {
    setTitle(props.editItem ? '编辑待办事项' : '新增一条待办事项')
    // if (form.current) {
    //   if (props.editItem) {
    //     let { title, description } = props.editItem
    //     form.current.setFieldsValue({ title, description })
    //   } else {
    //     form.current.resetFields()
    //   }
    // }  
  })

  return (
    <Drawer
      width="500"
      title={title}
      placement="right"
      closable={false}
      onClose={toggleVisible}
      visible={visible}
    >
      <TodoListForm editItem={props.editItem}  ref={form} toggleVisible = {toggleVisible}/>
    </Drawer>
  )
  
}



export default TodoListCAE