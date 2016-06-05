import React from 'react'
import { store } from './redux/store/renderStore'
import { render } from 'react-dom'
import App from './containers/App'
// import Login from './components/Login'
// import TodoHome from './components/TodoHome'
import Welcome from './containers/Welcome'
import List from './containers/List'
import Todo from './containers/Todo'
// import MusicHome from './components/MusicHome'
// import TodoEdit from './components/TodoEdit'
// import TodoDone from './components/TodoDone'
// import TodoDelete from './components/TodoDelete'
// import TodoAdd from './components/ToMy doAdd'
// import TodoDetail from './components/TodoDetail'
// import VideoHome from './components/VedioHome'
// import DiaryHome from './components/DiaryHome'
// import PhotoHome from './components/PhotoHome'
// import Setting from './components/Setting'
// import Introduce from './components/Introduce'
import { Router, Route } from 'react-router'
import { Provider } from 'react-redux'
// import { logger } from './common/log4js'
import './renderProcess/appwin'
// import './common/devtools'
// import { openWelcome } from './common/desktop'
import './style/App.scss'



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
        <Route path="/welcome" component={Welcome}/>
        <Route path="/list" component={List}/>
        <Route path="/todo" component={Todo}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)