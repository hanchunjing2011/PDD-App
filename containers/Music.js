import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import $ from 'jquery'
import { ipcRenderer } from 'electron'
import { window_show, window_close, window_focus, window_open } from '../communicate/communicationTypes'
import Header2 from '../components/Header2'
import SlideList from '../components/SlideList'
import MusicFooter from '../components/MusicFooter'

//这个是用来绑定state的   这边用不着  可以去掉
@connect((state) => {
  return {
    skin: state.skin
  }
})
export default class Music extends Component {
  constructor(){
    super()
  }
  componentDidMount() {
  }
  render(){ 
    return (
      <div className="MusicPage drag MusicPage-default">
        <Header2 winID="music"></Header2>
        <div className="body">
          <div className="left-part">
            <SlideList></SlideList>
          </div>
          <div className="right-part">
            <div className="lypicBox"></div>
          </div>
        </div>
        <div className="clear"></div>
        <div className="footer">
          <MusicFooter></MusicFooter>
        </div>
      </div>
    )
  }
}