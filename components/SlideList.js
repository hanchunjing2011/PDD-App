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
export default class SlideList extends Component {
  constructor(){
    super()
  }
  componentDidMount() {

  }
  render(){
    return (
      <ul className="SlideList nodrag SlideList-default">
        <li className="listitem playing">
          <span className="play glyphicon glyphicon-play"></span>
          <span className="pause glyphicon glyphicon-pause"></span>
          <p className="songname">给我一首歌的时间</p>
          <span className="heart glyphicon glyphicon-heart"></span>
          <div className="scort">
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
          </div>
        </li>
        <li className="listitem playing odd">
          <span className="play glyphicon glyphicon-play"></span>
          <span className="pause glyphicon glyphicon-pause"></span>
          <p className="songname">给我一首歌的时间</p>
          <span className="heart glyphicon glyphicon-heart"></span>
          <div className="scort">
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
          </div>
        </li>
        <li className="listitem playing">
          <span className="play glyphicon glyphicon-play"></span>
          <span className="pause glyphicon glyphicon-pause"></span>
          <p className="songname">给我一首歌的时间</p>
          <span className="heart glyphicon glyphicon-heart"></span>
          <div className="scort">
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
          </div>
        </li>
        <li className="listitem playing odd">
          <span className="play glyphicon glyphicon-play"></span>
          <span className="pause glyphicon glyphicon-pause"></span>
          <p className="songname">给我一首歌的时间</p>
          <span className="heart glyphicon glyphicon-heart"></span>
          <div className="scort">
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
          </div>
        </li>
        <li className="listitem playing">
          <span className="play glyphicon glyphicon-play"></span>
          <span className="pause glyphicon glyphicon-pause"></span>
          <p className="songname">给我一首歌的时间</p>
          <span className="heart glyphicon glyphicon-heart"></span>
          <div className="scort">
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
          </div>
        </li>
        <li className="listitem playing odd">
          <span className="play glyphicon glyphicon-play"></span>
          <span className="pause glyphicon glyphicon-pause"></span>
          <p className="songname">给我一首歌的时间</p>
          <span className="heart glyphicon glyphicon-heart"></span>
          <div className="scort">
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
          </div>
        </li>
        <li className="listitem playing">
          <span className="play glyphicon glyphicon-play"></span>
          <span className="pause glyphicon glyphicon-pause"></span>
          <p className="songname">给我一首歌的时间</p>
          <span className="heart glyphicon glyphicon-heart"></span>
          <div className="scort">
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
          </div>
        </li>
        <li className="listitem playing odd">
          <span className="play glyphicon glyphicon-play"></span>
          <span className="pause glyphicon glyphicon-pause"></span>
          <p className="songname">我的世界</p>
          <span className="heart glyphicon glyphicon-heart"></span>
          <div className="scort">
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
            <span className="star glyphicon glyphicon-star"></span>
          </div>
        </li>
      </ul>
    )
  }
}