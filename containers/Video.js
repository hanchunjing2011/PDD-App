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


//这个是用来绑定state的   这边用不着  可以去掉
@connect((state) => {
  return {
    skin: state.skin
  }
})
export default class Video extends Component {
  constructor(){
    super()
  }
  componentDidMount() {

  }
  render(){
    return (
      <div className="VideoPage drag VideoPage-default">
        <Header2 winID="video"></Header2>
        <div className="body">
          <div className="left-part">
            <ul>
              <li></li>
            </ul>
          </div>
          <div className="right-part">
            <div className="video-box">
              <video></video>
              <div className="video-tool"></div>
            </div>
          </div>
        </div>
        <div className="clear"></div>
        <div className="foot">
          <ul className="videoList"></ul>
        </div>
      </div>
    )
  }
}