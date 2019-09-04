import React, { useReducer, useContext } from 'react'
import { is, fromJS } from 'immutable'
import LocalStorage from 'localstorage'

const TodoList_LS = new LocalStorage('todolist_')

const initialState = fromJS({
  items: []
})

const reducer = (state = initialState, { type, payload }) => {
  let result = state
  switch (type) {
    case 'UPDATE_ITEMS':
      result = state.set('items', fromJS(payload.items))
      break
    case 'CREATE_ITEM':
      result = state.set('items', state.get('items').push(fromJS(payload.item)))
      break
    case 'FINISH_ITEM':
      result = state.set('items', state.get('items').update(
        state.get('items').findIndex(function(item) { 
          return is(item.get('id'), payload.id)
        }), function(item) {
          return item.set('finished', !item.get('finished'))
        })
      )
      break
    case 'UPDATE_ITEM':
      result = state.set('items', state.get('items').update(
        state.get('items').findIndex(function(item) { 
          return is(item.get('id'), payload.item.id)
        }), function(item) {
          item = item.set('title',  payload.item.title)
          item = item.set('description',  payload.item.description)
          return item
        })
      )
      break
    case 'DELETE_ITEM':
      let list = state.get('items')
      let index = list.findIndex((item) => is(item.get('id'), payload.id))
      result = state.set('items', list.remove(index))
      break
    default: break
  }
  TodoList_LS.put('items', result.get('items').toJS())
  return result
}

const actions = {
  getInitialItems () {
    let [err, items] = TodoList_LS.get('items')
    if (err) items = []
    this.dispatch({
      type: 'UPDATE_ITEMS',
      payload: { items }
    })
  },
  createTodoItem ({ item }) {
    let [err, id] = TodoList_LS.get('id')
    if (err) id = 0
    item.id = ++id
    item.finished = false
    this.dispatch({
      type: 'CREATE_ITEM',
      payload: { item }
    })
    TodoList_LS.put('id', item.id)
  },
  finishTodo ({ id }) {
    this.dispatch({
      type: 'FINISH_ITEM',
      payload: { id }
    })
  },
  deleteTodo ({ id }) {
    this.dispatch({
      type: 'DELETE_ITEM',
      payload: { id }
    })
  },
  updateTodoItem ({ item }) {
    this.dispatch({
      type: 'UPDATE_ITEM',
      payload: { item }
    })
  } 
}

const getters = {
  todoDetail: (state) => {
    let items = state.items
    let todoFinishedItems = items.filter(item => item.finished)
    let todoUnfinishedItems = items.filter(item => !item.finished)
    let description = `当前共有 ${items.length} 条待办事项，其中${todoFinishedItems.length}条已完成，${todoUnfinishedItems.length}条待完成。`
    
    return {
      description,
      todoItems: items,
      todoFinishedItems,
      todoUnfinishedItems
    }
  },
  items: (state) => {
    return state.items
  }
}

export const useTodoListState = ( getter ) => {
  let [ state, dispatch ] = useReducer(reducer, initialState)
  if (!actions.dispatch) actions.dispatch = dispatch
  
  let _state = state.toJS()
  
  let result = [
    _state, 
    actions
  ]

  return result
}

export const StoreContext = React.createContext({})

export const HookStoreProvider = (props) => {
  let [state, actions] = useTodoListState()
  return (
    <StoreContext.Provider value = {{ state, actions }}>
      { props.children }
    </StoreContext.Provider>
  )
}

export const useTodolistStoreContext = ( getter ) => {
  let {state, actions} = useContext(StoreContext)

  let result = [
    getter ? getters[getter](state) : state, 
    actions
  ]
  return result
}