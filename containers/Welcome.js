import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import $ from 'jquery'
import { ipcRenderer } from 'electron'
import { list } from '../renderProcess/winOptions'
import { window_show, window_close, window_focus, window_open } from '../communicate/communicationTypes'
import CoverHeader from '../components/CoverHeader'








export default class Welcome extends Component {
  constructor(){
    super()
  }

  componentDidMount() {
    $(document).ready(() => {
      let obj = {
        winID: 'welcome'
      }
      ipcRenderer.send(window_show, obj)
      ipcRenderer.send(window_focus, obj)
    })
    setTimeout(() => {
      ipcRenderer.send(window_open,{
        winID:'list',
        options: list
      })
      // ipcRenderer.send(window_close,{
      //   winID:'welcome'
      // })
    },1000)
  }
  render(){
    return (
      <div className="WelcomePage drag WelcomePage-default">
        <CoverHeader winID=""></CoverHeader>
        <div className="showPDD">
          <p className="showWel">Welcome To My World</p>
          <p className="showName">PDD&张椿木</p>
          <p className="showEmail">1575455507@qq.com</p>
          <p className="showRights">Copyright © 2016 PDD. All Rights Reserved.</p>
        </div>
      </div>
    )
  }
}