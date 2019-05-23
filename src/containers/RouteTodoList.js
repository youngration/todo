import React from 'react'
import { ReactReduxContext } from 'react-redux'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions/index'
import { toggleTodo } from '../actions/index'

export default ({ filter }) => {
  let { store: { getState, dispatch } } = React.useContext(ReactReduxContext)
  let { SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters
  let todos
  switch(filter) {
    case SHOW_COMPLETED:
      todos = getState().todos.filter(todo => todo.completed)
      break
    case SHOW_ACTIVE:
      todos = getState().todos.filter(todo => !todo.completed)
      break
    default:
      todos = getState().todos
  }
  return (
    <TodoList todos={todos} toggleTodo={id => {dispatch(toggleTodo(id))}} />
  )
}