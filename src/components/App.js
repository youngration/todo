import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/RouteTodoList'
// import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'

export default ({ match: { params } }) => {
  return (
    <>
      <AddTodo />
      <VisibleTodoList filter={params.filter} />
      <Footer />
    </>
  )
}