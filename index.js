import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import About from './components/About'
import configureStore from './store/configureStore'
// import 'todomvc-app-css/index.css'
import { Router, Route, browserHistory } from 'react-router'
// render(
//   ( <Router history={ hashHistory} >
//       <Route path='/' component={ App } />
//       <Route path='/about' component={ About } />
//       <Route path='/repos' component={ Repos} />
//     </Router> ), document.getElementById('app'))

const store = configureStore()

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
