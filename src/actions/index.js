export let ADD_TODO = 'ADD_TODO'
export let TOGGLE_TODO = 'TOGGLE_TODO'
export let SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export let VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: Date.now(),
    text
  }
}
export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}
export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}