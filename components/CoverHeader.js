import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import $ from 'jquery'
import { ipcRenderer } from 'electron'
import { list } from '../renderProcess/winOptions'
import { window_show, window_close, window_focus, window_open } from '../communicate/communicationTypes'



//这个是用来绑定state的   这边用不着  可以去掉
// @connect((state) => {
//   return {
//     todos: state.todos
//   }
// })

@connect((state) => {
  return {
    todos: state.todos
  }
})
export default class CoverHeader extends Component {
  constructor(){
    super()
  }

  componentDidMount() {

  }
  render(){
    return (
      <div className="ConverHeader drag">
        <div className="icon setting"></div>
        <div className="icon close"></div>
        <div className="icon in"></div>
      </div>
    )
  }
}