import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions/index'
import { toggleTodo } from '../actions/index'

let { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters
function mapState(state) {
  switch(state.visibilityFilter) {
    case SHOW_ALL:
      return { todos: state.todos }
    case SHOW_COMPLETED:
      return { todos: state.todos.filter(todo => todo.completed) }
    case SHOW_ACTIVE:
      return { todos: state.todos.filter(todo => !todo.completed) }
  }
}
function mapDispatch(dispatch) {
  return {
    toggleTodo: id => dispatch(toggleTodo(id))
  }
}
export default connect(mapState, mapDispatch)(TodoList)