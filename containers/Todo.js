import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import $ from 'jquery'
import { conv } from '../common/config'
import { skinConv } from '../common/skin'
import { ipcRenderer } from 'electron'
import { window_show, window_close, window_focus, window_open } from '../communicate/communicationTypes'
import { todo as todoOptions } from '../renderProcess/winOptions'
// import Header from '../components/Header'


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
        <div className="searchInputBox">
          <input type="text" ref="searchInput" placeholder="Search" />
          <span className="glyphicon glyphicon-search"></span>
        </div>
        <div className="todolistBox">
          <ul className="todolist">
            <li className="todoitem choosed">
              <div className="hoveritem"></div>
              <span className="task-card glyphicon glyphicon-tag blue"></span>
              <div className="pBox">
                <p className="title"></p>
                <p className="time"></p>
              </div>
              <span className="setting glyphicon glyphicon-pencil blue"></span>
              <span className="circle glyphicon glyphicon-ok blue"></span>
            </li>
            <li className="todoitem">
              <div className="hoveritem"></div>
              <span className="task-card glyphicon glyphicon-tag gray"></span>
              <div className="pBox"></div>
              <span className="setting glyphicon glyphicon-pencil gray"></span>
              <span className="circle glyphicon glyphicon-remove gray"></span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}






