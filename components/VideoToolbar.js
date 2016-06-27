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
export default class VideoToolbar extends Component {
  constructor(){
    super()
  }
  componentDidMount() {
    $(document).ready(() => {

    })
  }
  render(){
    return (
      <div className="VideoToolbar drag VideoToolbar-default">
        <div className="playbutton">
          <span className="toolspan play glyphicon glyphicon-play"></span>
          <span className="toolspan pause glyphicon glyphicon-pause"></span>
        </div>
        <div className="progress-video-nav nodrag">
          <div className="progress-ball"></div>
          <div className="progress progress-video nodrag">
            <div className="progress-bar progress-bar-video"></div>
          </div>
        </div>
        <div className="voice-box">
          <span className="nowtime">00:00</span>
          <span className="split">/</span>
          <span className="totaltime">05:00</span>
          <span className="toolspan voice glyphicon glyphicon-volume-up">
            <ScrollUpDown></ScrollUpDown>
          </span>
          <span className="toolspan large glyphicon glyphicon-unchecked"></span>
          <span className="toolspan fullscreen glyphicon glyphicon-fullscreen"></span>
        </div>
      </div>
    )
  }
}