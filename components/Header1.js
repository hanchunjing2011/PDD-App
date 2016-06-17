import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import $ from 'jquery'
import { conv } from '../common/config'
import { skinConv } from '../common/skin'
import { ipcRenderer } from 'electron'
import { window_show, window_close, window_focus, window_open } from '../communicate/communicationTypes'
import { todo as todoOptions } from '../renderProcess/winOptions'



//这个是用来绑定state的   这边用不着  可以去掉
@connect((state) => {
  return {
    skin: state.skin
  }
})
export default class Header1 extends Component {
  constructor(){
    super()
  }
  componentDidMount() {
  }
  render(){
    const winID = this.props.winID
    return (
      <div className="Header1 drag Header1-default">
        { winID == 'login' && this.renderLogin()}
        { winID == 'list' && this.renderList()}
      </div>
    )
  }
  renderLogin () {
    return(
      <div>
        <div className="header-icon close" title="退出魔法盒子"><span className="glyphicon glyphicon-remove"></span></div>
        <div className="header-icon min" title="最小化"><span className="glyphicon glyphicon-minus"></span></div>
        <div className="header-icon setting" title="设置"><span className="glyphicon glyphicon-cog"></span></div>
        <div className="header-icon header-icon-left person" title="作者信息PDD"><img src="public/img/account/PDD.png" /></div>
      </div>
    )
  }
  renderList () {
    return(
      <div>
        <div className="header-icon close" title="退出魔法盒子"><span className="glyphicon glyphicon-remove"></span></div>
        <div className="header-icon min" title="最小化"><span className="glyphicon glyphicon-minus"></span></div>
        <div className="header-icon setting" title="设置"><span className="glyphicon glyphicon-cog"></span></div>
        <div className="header-icon account" title="当前用户信息"><span className="glyphicon glyphicon-user"></span></div>
        <div className="header-icon header-icon-left person" title="作者信息PDD"><img src="public/img/account/PDD.png" /></div>
      </div>
    )
  }
}