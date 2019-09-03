import { useEffect, useReducer } from 'react'

const initialState = {
  items: []
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'UPDATE_ITEMS':
      state.items = payload.items
      return state
    default: return state
  }
}

class Actions {
  getInitialItems () {
    // let items = [
    //   { id: 1, title: '哈哈哈哈', description: 'ahsjdsajdasdh', finished: true },
    //   { id: 2, title: '嘿嘿嘿嘿', description: '阿大', finished: false }
    // ]
    let items = []

    for (let i = 0; i < 10; i++) {
      items.push({
        id: i + 1,
        title: 'Todo' + (i + 1),
        description: 'Description' + (i + 1),
        finished: i % 2 === 0
      })
    }

    this.dispatch({
      type: 'UPDATE_ITEMS',
      payload: { items }
    })
  }
}

export const useTodoListItems = (particle) => {
  let [ state, dispatch ] = useReducer(reducer, initialState)
 
  Actions.prototype.dispatch = dispatch
  let actions = new Actions()

  useEffect(() => {
    if (!state.items.length) actions.getInitialItems()
  }, [state.items.length, actions])

  return [particle ? state[particle] : state, actions]
}


export const useTodoListGetters = () => {
  let [ state ] = useTodoListItems()

  let todoFinishedItems = state.items.filter(item => item.finished)
  let todoUnfinishedItems = state.items.filter(item => !item.finished)
  
  let description = `当前共有 ${state.items.length} 条待办事项，其中${todoFinishedItems.length}条已完成，${todoUnfinishedItems.length}条待完成。`
  return [{
    description,
    todoItems: state.items,
    todoFinishedItems,
    todoUnfinishedItems
  }]
}