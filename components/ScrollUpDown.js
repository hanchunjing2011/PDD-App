import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import $ from 'jquery'
import { conv } from '../common/config'
import { skinConv } from '../common/skin'
import { ipcRenderer } from 'electron'
import { window_show, window_close, window_focus, window_open } from '../communicate/communicationTypes'


//这个是用来绑定state的   这边用不着  可以去掉
@connect((state) => {
  return {
    skin: state.skin
  }
})
export default class ScrollUpDown extends Component {
  constructor(){
    super()
  }
  componentDidMount() {
    $('.progress-ball').off('mousedown').on('mousedown', function (e) {
      let initY = e.pageY
      e.preventDefault() 

      $(document).off('mousemove').on('mousemove', (ev) => {
        ev.preventDefault() 
        let pageY = ev.pageY
        let disY = pageY - initY
        initY = pageY
        let bottom = null
        if(disY >= 0) {
          bottom = $('.progress-ball').css('bottom')
          bottom = parseInt(bottom)
          if(bottom - disY<= 0){
            $('.progress-ball').css('bottom','0px')
          }else{
            $('.progress-ball').css('bottom',bottom-disY+'px')
          }
        }else{
          bottom = $('.progress-ball').css('bottom')
          bottom = parseInt(bottom)
          if(bottom - disY >= 100){
            $('.progress-ball').css('bottom','100px')
          }else{
            $('.progress-ball').css('bottom',bottom-disY+'px')
          }
        }
        bottom = parseInt($('.progress-ball').css('bottom'))
        $('.progress-scrobar').css('height',bottom+8+'px')
      })

      $(document).on('mouseup', () => {
        $(document).off('mousemove').off('mouseup')
      })
    })
  }
  render(){
    return (
      <div className="ScrollUpDown drag ScrollUpDown-default">
        <div className="progress-ball"></div>
        <div className="progress-scrobar">
          
        </div>
      </div>
    )
  }
}