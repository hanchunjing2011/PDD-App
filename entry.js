import React from 'react'
import { store } from './redux/store/renderStore'
import { render } from 'react-dom'
import App from './containers/App'
import Login from './containers/Login'
import Welcome from './containers/Welcome'
import List from './containers/List'
import Todo from './containers/Todo'
import Music from './containers/Music'
import Video from './containers/Video'
import Diary from './containers/Diary'
import Photo from './containers/Photo'
import TodoTask from './containers/TodoTask'
import { Router, Route } from 'react-router'
import { Provider } from 'react-redux'
import './renderProcess/appwin'
import './public/css/App.scss'



// setTimeout(() => {
//   openWelcome()
// },10000)
//路由配置   挂载store到属性位置
// window.console.log('entry')


// console.log(store.getState())
render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} >
        <Route path="/welcome" component={ Welcome }/>
        <Route path="/login" component={ Login }/>
        <Route path="/list" component={ List }/>
        <Route path="/todo" component={ Todo }/>
        <Route path="/diary" component={ Diary }/>
        <Route path="/music" component={ Music }/>
        <Route path="/video" component={ Video }/>
        <Route path="/todotask" component={ TodoTask }/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)