import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import "../common/textarea"
import $ from 'jquery'
import { skinConv } from '../common/skin'
import { ipcRenderer } from 'electron'
import TodoTagBlock from '../components/TodoTagBlock'
import TimeCount from '../components/TimeCount'

//这个是用来绑定state的   这边用不着  可以去掉
@connect((state) => {
  return {
    skin: state.skin
  }
})
export default class TodoTask extends Component {
  constructor(){
    super()
  }
  componentDidMount() {
    $("textarea").textareaAutoHeight({ maxHeight:300 });
  }
  render(){
    return (
      <div className="TodoTask drag TodoTask-default">
        <div className="TaskBox">
          <dl className="taskitem title nodrag">
            <dd className="left"><span className="glyphicon glyphicon-menu-hamburger"></span></dd>
            <dd className="right">
              <div className="showtitle" contentEditable="true">发生大幅杀跌第三方斯蒂芬大事f发生大幅杀跌第三方斯蒂芬大事f发生大幅杀跌第三方斯蒂芬大事f发生大幅杀跌第三方斯蒂芬大事f发生大幅杀跌第三方斯蒂芬大事f</div>
            </dd>
          </dl>
          <div className="clear"></div>
          {this.renderImportant()}
          <div className="clear"></div>
          {this.renderPopular()}
          <div className="clear"></div>
          <dl className="taskitem time nodrag">
            <dd className="left"><span className="glyphicon glyphicon-time"></span></dd>
            <dd className="right"></dd>
          </dl>
          <div className="clear"></div>
          <dl className="taskitem tags nodrag">
            <dd className="left"><span className="glyphicon glyphicon-bookmark"></span></dd>
            <dd className="right">
              <TodoTagBlock text="test"></TodoTagBlock>
              <TodoTagBlock text="我的家在种啥"></TodoTagBlock>
              <TodoTagBlock text="xijinping"></TodoTagBlock>
              <TodoTagBlock text="毛泽东"></TodoTagBlock>
              <TodoTagBlock text="老猫"></TodoTagBlock>
              <span className="glyphicon glyphicon-plus add"></span>
            </dd>
          </dl>
          <div className="clear"></div>
          <dl className="taskitem about nodrag">
            <dd className="left"><span className="glyphicon glyphicon-user"></span></dd>
            <dd className="right">
              <TodoTagBlock text="了可强"></TodoTagBlock>
              <TodoTagBlock text="习近平"></TodoTagBlock>
              <TodoTagBlock text="中国人"></TodoTagBlock>
              <TodoTagBlock text="毛泽东"></TodoTagBlock>
              <TodoTagBlock text="老猫"></TodoTagBlock>
              <TodoTagBlock text="老猫"></TodoTagBlock>
              <span className="glyphicon glyphicon-plus add"></span>
            </dd>
          </dl>
          <div className="clear"></div>
          <dl className="taskitem rest nodrag">
            <dd className="left"><span className="glyphicon glyphicon-hourglass"></span></dd>
            <dd className="right">
              <TimeCount></TimeCount>
            </dd>
          </dl>
          <div className="clear"></div>
        </div>
      </div>
    )
  }
  renderImportant () {
    return (
      <dl className="taskitem important nodrag">
        <dd className="left"><span className="glyphicon glyphicon-info-sign"></span></dd>
        <dd className="right">
          <div className="importBox err">
            <span className="fui-radio-unchecked"></span>
            <span className="fui-radio-checked"></span>
            <span className="tip">重要:紧急</span>
          </div>
          <div className="importBox warn">
            <span className="fui-radio-unchecked"></span>
            <span className="fui-radio-checked"></span>
            <span className="tip">重要:不紧急</span>
          </div>
          <div className="importBox info choosed">
            <span className="fui-radio-unchecked"></span>
            <span className="fui-radio-checked"></span>
            <span className="tip">不重要:紧急</span>
          </div>
          <div className="importBox success">
            <span className="fui-radio-unchecked"></span>
            <span className="fui-radio-checked"></span>
            <span className="tip">不重要:不紧急</span>
          </div>
        </dd>
      </dl>
    )
  }
  renderPopular () {
    return(
      <dl className="taskitem popular nodrag">
        <dd className="left"><span className="glyphicon glyphicon-heart"></span></dd>
        <dd className="right" title="点击选定星星数量">
          <span className="glyphicon glyphicon-star"></span>
          <span className="glyphicon glyphicon-star"></span>
          <span className="glyphicon glyphicon-star"></span>
          <span className="glyphicon glyphicon-star"></span>
          <span className="glyphicon glyphicon-star-empty empty"></span>
        </dd>
      </dl>
    )
  }
}