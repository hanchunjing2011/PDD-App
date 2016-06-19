import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import $ from 'jquery'
import { ipcRenderer } from 'electron'
import { window_show, window_close, window_focus, window_open } from '../communicate/communicationTypes'

//这个是用来绑定state的   这边用不着  可以去掉
@connect((state) => {
  return {
    skin: state.skin
  }
})
export default class MusicTopicBlock extends Component {
  constructor(){
    super()
  }
  componentDidMount() {
  }
  render(){
    return (
      <div className="MusicTopicBlock drag MusicTopicBlock-default">
        <ul className="topiclist">
          <li className="topicitem" title="周杰伦搜狐藏">
            <div className="topicmask">
              <span className="glyphicon glyphicon-play play"></span>
              <span className="glyphicon glyphicon-pause pause"></span>
            </div>
            <img className="topicimg" src="public/img/music/PDD.png"/>
            <p className="topicname">周杰伦收藏兽餐</p>
          </li>
          <li className="topicitem">
            
          </li>
          <li className="topicitem">
            
          </li>
          <li className="topicitem">
            
          </li>
          <li className="topicitem">
            
          </li>
          <li className="topicitem">
            
          </li>
          <li className="topicitem">
            
          </li>
          <li className="topicitem">
            
          </li>
          <li className="topicitem">
            
          </li>
          <li className="topicitem">
            
          </li>
          <li className="topicitem">
            
          </li>
          <li className="topicitem">
            
          </li>
          <li className="topicitem">
            
          </li>
          <li className="topicitem">
            
          </li>
          <li className="topicitem">
            
          </li>
          <li className="topicitem">
            
          </li>
          <li className="topicitem">
            
          </li>
          <li className="topicitem">
            
          </li>
          <li className="topicitem">
            
          </li>
          <li className="topicitem">
            
          </li>
          <li className="topicitem">
            
          </li>
          <li className="topicitem">
            
          </li>
          <li className="topicitem">
            
          </li>
          <li className="topicitem">
            
          </li>
        </ul>
      </div>
    )
  }
}