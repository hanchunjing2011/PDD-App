import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import $ from 'jquery'
import { conv } from '../common/config'
import { skinConv } from '../common/skin'
import { ipcRenderer } from 'electron'
import { window_show, window_close, window_focus, window_open } from '../communicate/communicationTypes'
import { todo, music, diary, photo, video } from '../renderProcess/winOptions'
import Header1 from '../components/Header1'


//这个是用来绑定state的   这边用不着  可以去掉
@connect((state) => {
  return {
    skin: state.skin
  }
})
export default class List extends Component {
  constructor () {
    super()
  }
  componentDidMount () {
    $(document).ready(() => {
      let obj = {
        winID: 'list'
      }
      ipcRenderer.send(window_show, obj)
      ipcRenderer.send(window_focus, obj)
    })
  }
  openWindow (winID) {
    if(winID == 'music'){
      ipcRenderer.send(window_open, {
        winID: winID,
        options: music
      })
    }    
    if(winID == 'todo'){
      ipcRenderer.send(window_open, {
        winID: winID,
        options: todo
      })
    }    
    if(winID == 'photo'){
      ipcRenderer.send(window_open, {
        winID: winID,
        options: photo
      })
    }    
    if(winID == 'diary'){
      ipcRenderer.send(window_open, {
        winID: winID,
        options: diary
      })
    }    
    if(winID == 'video'){
      ipcRenderer.send(window_open, {
        winID: winID,
        options: video
      })
    }
  }
  render(){
    const skin = this.props.skin
    const listConfig = skin.config.list
    const list = skin.list
    const using = list.using
    return (
      <div className="ListPage drag ListPage-default">
        <Header1 winID="list"></Header1>
        <div className="outBox">
          <div className="wrap first" title="音乐-极致享受" onClick={() => {this.openWindow('music')}}><span className="glyphicon glyphicon-music"></span></div>
          <div className="wrap second" title="电影-乐在其中" onClick={() => {this.openWindow('vedio')}}><span className="glyphicon glyphicon-film"></span></div>
          <div className="wrap third" title="相册-情感回忆" onClick={() => {this.openWindow('photo')}}><span className="glyphicon glyphicon-picture"></span></div>
          <div className="wrap forth" title="卡片-奋斗每一天" onClick={() => {this.openWindow('todo')}}><span className="glyphicon glyphicon-tag"></span></div>
          <div className="wrap fifth" title="日记-点点滴滴" onClick={() => {this.openWindow('diary')}}><span className="glyphicon glyphicon-list-alt"></span></div>
        </div>
      </div>
    )
  }
}