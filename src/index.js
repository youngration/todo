import React from 'react'
import { render} from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './components/App'
import reducer from './reducers/index'
import { VisibilityFilters } from './actions/index'

let store = createStore(reducer, {
  todos: [{
    id: Date.now(),
    text: 'eat',
    completed: false
  }],
  visibilityFilter: VisibilityFilters.SHOW_ALL
})
render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/:filter?" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.querySelector('#root')
)