import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import $ from 'jquery'
import { skinConv } from '../common/skin'
import { ipcRenderer } from 'electron'


//这个是用来绑定state的   这边用不着  可以去掉
@connect((state) => {
  return {
    skin: state.skin
  }
})
export default class TodoTagBlock extends Component {
  constructor(){
    super()
  }
  componentDidMount() {
  }
  render(){
    let text = this.props.text
    return (
      <div className="TodoTagBlock drag TodoTagBlock-default">
        <span className="glyphicon glyphicon-remove remove"></span>
        <p>{text}</p>
      </div>
    )
  }
}