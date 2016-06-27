import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import $ from 'jquery'
import { conv } from '../common/config'
import { skinConv } from '../common/skin'
import { ipcRenderer } from 'electron'
import { window_show, window_close, window_focus, window_open } from '../communicate/communicationTypes'
import ScrollUpDown from './ScrollUpDown' 


//这个是用来绑定state的   这边用不着  可以去掉
@connect((state) => {
  return {
    skin: state.skin
  }
})
export default class MusicFooter extends Component {
  constructor(){
    super()
  }
  componentDidMount() {
  }
  render(){
    return (
      <div className="MusicFooter drag MusicFooter">
        <div className="findMp3">
          <button className="findlocal">本地添加</button>
          <button className="findonline">在线搜索</button>
        </div>
        <div className="operamusic">
          <span className="glyphicon glyphicon-fast-backward"></span>
          <span className="glyphicon glyphicon-play"></span>
          <span className="glyphicon glyphicon-pause hide"></span>
          <span className="glyphicon glyphicon-fast-forward"></span>
        </div>
        <div className="nowtime">00:00</div>
        <div className="progresspro">
          <div className="progress">
            <div className="progress-bar"></div>
          </div>
        </div>
        <div className="alltime">00:00</div>
        <div className="operaafter">
          <span className="glyphicon glyphicon-random"></span>
          <span className="glyphicon glyphicon-refresh"></span>
          <span className="glyphicon glyphicon-volume-up">
            <ScrollUpDown></ScrollUpDown>
          </span>
          <span className="glyphicon glyphicon-volume-off hide"></span>
        </div>
      </div>
    )
  }
}