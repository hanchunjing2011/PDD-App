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
        <div className="left-part"></div>
        <div className="right-part"></div>
      </div>
    )
  }
}






