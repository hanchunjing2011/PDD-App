import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import $ from 'jquery'
import { conv } from '../common/config'
import { skinConv } from '../common/skin'
import { ipcRenderer } from 'electron'
import { window_show, window_close, window_focus, window_open } from '../communicate/communicationTypes'
import { todo as todoOptions } from '../renderProcess/winOptions'
import Header2 from '../components/Header2'
import TaskList from '../components/TaskList'


//这个是用来绑定state的   这边用不着  可以去掉
@connect((state) => {
  return {
    skin: state.skin
  }
})
export default class Todo extends Component {
  constructor(){
    super()
  }
  componentDidMount() {
  }
  render(){
    return (
      <div className="TodoPage drag TodoPage-default">
        <Header2 winID="todo"></Header2>
        <div className="body">
          <div className="left-part">
            <ul className="typelist">
              <li className="typeitem"><span className="glyphicon glyphicon-th-list"></span><span className="titleitem">任务</span></li>
              <li className="typeitem choosed"><span className="glyphicon glyphicon-time"></span><span className="titleitem">时间</span></li>
              <li className="typeitem"><span className="glyphicon glyphicon-tags"></span><span className="titleitem">便签</span></li>
              <li className="typeitem"><span className="glyphicon glyphicon-bookmark"></span><span className="titleitem">标签</span></li>
              <li className="typeitem"><span className="glyphicon glyphicon-search"></span><span className="titleitem">搜索</span></li>
            </ul>
          </div>
          <div className="right-part">
            <TaskList></TaskList>
          </div>
        </div>
      </div>
    )
  }
}






