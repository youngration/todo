import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index'

function AddTodo({ addTodo }) {
  let ref = React.createRef()
  function add() {
    if(ref.current.value.trim() !== '') {
      addTodo(ref.current.value)
      ref.current.value = ''
    }
  }
  return (
    <div>
      <input ref={ref} type="text" />
      <button onClick={add}>Add Todo</button>
    </div>
  )
}
function mapDispatch(dispatch) {
  return {
    addTodo: text => dispatch(addTodo(text))
  }
}
export default connect(null, mapDispatch)(AddTodo)