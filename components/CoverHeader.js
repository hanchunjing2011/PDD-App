import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import $ from 'jquery'
import { ipcRenderer } from 'electron'
import { list } from '../renderProcess/winOptions'
import { 
  window_show, 
  window_close, 
  window_focus, 
  window_open, 
  window_min,
  app_close 
} from '../communicate/communicationTypes'



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
  doWindow(winID, type){
    if(type == 'min'){
      ipcRenderer.send(window_min, {
        winID:winID
      })
    }else if(type == 'set'){
      ipcRenderer.send(window_open, {
        winID:'setting'
      })
    }else if(type == 'quit'){
      ipcRenderer.send(app_close, {
        
      })
    }else if(type == 'account'){

    }
    
  }
  render(){
    const winID = this.props.winID
    return (
      <div className="ConverHeader drag showHeader">
        <div className="icon close nodrag" title="关闭应用程序" onClick={() =>{this.doWindow(winID, 'quit')}}></div>
        <div className="icon min nodrag" title="最小化" onClick={() =>{this.doWindow(winID, 'min')}}></div>
        <div className="icon setting nodrag" title="设置" onClick={() =>{this.doWindow(winID, 'set')}}><i></i></div>
        <div className="icon person nodrag" title="关于用户" onClick={() =>{this.doWindow(winID, 'account')}}><i></i></div>
      </div>
    )
  }
}