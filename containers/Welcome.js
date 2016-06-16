import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import $ from 'jquery'
import { ipcRenderer } from 'electron'
import { list } from '../renderProcess/winOptions'
import { window_show, window_close, window_focus, window_open } from '../communicate/communicationTypes'
import CoverHeader from '../components/CoverHeader'
import { login } from '../renderProcess/winOptions'







export default class Welcome extends Component {
  constructor(){
    super()
  }

  componentDidMount() {

    //加载完成之后打开页面  闪光hack
    $(document).ready(() => {
      let obj = {
        winID: 'welcome'
      }
      ipcRenderer.send(window_show, obj)
      ipcRenderer.send(window_focus, obj)

      ipcRenderer.send(window_open, {
        winID: 'login',
        options: login
      })
    })
  }
  render(){
    return (
      <div className="WelcomePage drag WelcomePage-default">

      </div>
    )
  }
}