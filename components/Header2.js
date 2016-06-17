
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import $ from 'jquery'
import { conv } from '../common/config'
import { ipcRenderer } from 'electron'
import { window_show, window_close, window_focus, window_open } from '../communicate/communicationTypes'
import { todo as todoOptions } from '../renderProcess/winOptions'



//这个是用来绑定state的   这边用不着  可以去掉
@connect((state) => {
  return {
    skin: state.skin
  }
})
export default class Header2 extends Component {
  constructor(){
    super()
  }
  componentDidMount() {
  }
  render(){
    const winID = this.props.winID
    let title = ''
    let headerTitle = ''
    if(winID == 'music'){
      title = '退出音乐播放器'
      headerTitle = 'Music Player'
    }else if(winID == 'todo'){
      title = "退出任务列表页"
      headerTitle = 'Todo List'
    }else if(winID == 'video'){
      title = "退出视频播放器"
      headerTitle = 'Video Player'
    }else if(winID == 'diary'){
      title = "退出日志"
      headerTitle = 'Diary Log'
    }else if(winID == 'photo'){
      title = "退出相册"
      headerTitle = 'Photo Player'
    }
    return (
      <div className="Header2 drag Header2-default">
        <p className="header-title">{headerTitle}</p>
        <div className="header-icon close" title={title}><span className="glyphicon glyphicon-remove"></span></div>
        <div className="header-icon min" title="最小化"><span className="glyphicon glyphicon-minus"></span></div>
        <div className="header-icon setting" title="设置"><span className="glyphicon glyphicon-cog"></span></div>
        <div className="header-icon list" title="功能选择"><span className="glyphicon glyphicon-th"></span></div>
        <div className="header-icon account" title="当前用户信息"><span className="glyphicon glyphicon-user"></span></div>
        <div className="header-icon header-icon-left person" title="作者信息PDD"><img src="public/img/account/PDD.png" /></div>
      </div>
    )
  }
}