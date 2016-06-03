import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import $ from 'jquery'
import { conv } from '../common/config'
import { skinConv } from '../common/skin'
import { ipcRenderer } from 'electron'
import { window_show, window_close, window_focus, window_open } from '../communicate/communicationTypes'




//这个是用来绑定state的   这边用不着  可以去掉
@connect((state) => {
  return {
    skin: state.skin
  }
})
export default class List extends Component {
  constructor(){
    super()
  }
  componentDidMount() {
    $(document).ready(() => {
      let obj = {
        winID: 'list'
      }
      ipcRenderer.send(window_show, obj)
      ipcRenderer.send(window_focus, obj)
    })
  }
  render(){
    const skin = this.props.skin
    const listConfig = skin.config.list
    const list = skin.list
    const using = list.using
    return (
      <div className="ListPage drag ListPage-default">
        <div className="outBox">
          <div className="func-icon first"></div>
          <div className="func-icon second"></div>
          <div className="func-icon third"></div>
          <div className="func-icon forth"></div>
          <div className="func-icon fifth"></div>
          <div className="func-icon sixth"></div>
          <div className="func-icon seventh"></div>
        </div>
      </div>
    )
  }
}