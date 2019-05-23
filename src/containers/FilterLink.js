import { connect } from 'react-redux'
import Link from '../components/Link'
import { setVisibilityFilter } from '../actions/index'
function mapState(state, props) {
  return {
    flag: state.visibilityFilter === props.filter
  }
}
function mapDispatch(dispatch, props) {
  return {
    setFilter: () => dispatch(setVisibilityFilter(props.filter))
  }
}
export default connect(mapState, mapDispatch)(Link)