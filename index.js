import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import About from './components/About'
import configureStore from './store/configureStore'
import { Router, Route, browserHistory } from 'react-router'

render(
  (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={ App } />
        <Route path='/about' component={ About } />
      </Router>
    </Provider>
   ),
  document.getElementById('root')
)
