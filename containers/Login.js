import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { dispatch } from '../redux/store/renderStore'
import { newStatus } from '../redux/actions/actions'
import $ from 'jquery'
import { conv } from '../common/config'
import cs from 'classnames'



@connect((state) => {
  return {
    status: state.status,
    user: state.user
  }
})
export default class Login extends Component {
  constructor(){
    super()
    this.state = {
      canLogin: false,
      canAccount: false,
      canPassword: false,
      canRePassword: false
    }
  }
  render(){
    let loginStatus = this.props.status.loginStatus
    let loging = loginStatus.loging
    return (
      <div className="LoginPage LoginPage-def drag">
        <div className="row container-box">
          <div className="col-sm-5">
            <img src="public/img/login/LoginPage-magic-box.png" width="200" height="200"/>
            <p className="box-name">魔法盒子</p>
            <p className="auth-name">PDD</p>
          </div>
          <div className="col-sm-7">
            <div className="login-box">
              <span className="fui-play pointer-left"></span>  
              { loging && this.renderLogin()}
              { !loging && this.renderSinup()}
            </div>
          </div>
        </div>
      </div>
    )
  }
  renderLogin () {
    return(
      <div className="login-nav">
        <div className="input-group login-group">
          <input type="text" id="loginAccount" className="form-control" placeholder="account"/>
        </div>
        <div className="input-group login-group">
          <input type="password" id="loginPassword" className="form-control" placeholder="password"/>
        </div>
        <div className="button-box">
          <button className="btn btn-hg btn-primary login left" onClick={() => {this.changeStatus('login')}}>登录</button>
          <button className="btn btn-hg btn-primary login right" onClick={() => {this.changeStatus('tosinup')}}>注册</button>
        </div>
      </div>
    )
  }
  renderSinup () {
    return(
      <div className="login-nav">
        <div className="input-group sinup-group">
          <span className="fui-cross"></span>
          <input type="text" id="sinAccount" className="form-control" placeholder="account" onBlur={() => {this.verifySinAccount('sinAccount')}} onFocus={() => {this.clearAll('sinAccount')}}/>
        </div>
        <div className="input-group sinup-group">
          <span className="fui-cross"></span>
          <input type="password" id="sinPassword" className="form-control" placeholder="password" onBlur={() => {this.verifySinPassword('sinPassword')}} onFocus={() => {this.clearAll('sinPassword')}}/>
        </div>
        <div className="input-group sinup-group">
          <span className="fui-cross"></span>
          <input type="password" id="sinRePassword" className="form-control" placeholder="repassword" onBlur={() => {this.verifySinRePassword('sinRePassword')}} onFocus={() => {this.clearAll('sinRePassword')}}/>
        </div>
        <div className="button-box sinup">
          <button id="sinupAccount" className="btn btn-hg btn-primary sinup left" onClick={() => {this.singUp()}} onMouseOver={() => {this.verifyCanSinup('sinupAccount')}}>完成注册</button>
          <button className="btn btn-hg btn-primary sinup right" onClick={() => {this.changeStatus('tologin')}}>回到登录</button>
        </div>
      </div>
    )
  }
  changeStatus (type) {
    let status = this.props.status
    let loginStatus = status.loginStatus
    if(type == 'login'){

    }else if(type == 'tosinup') {
      loginStatus.loging = false
      dispatch(newStatus(status))
    }else if(type == 'tologin'){
      loginStatus.loging = true
      dispatch(newStatus(status))
    }else if(type == 'sinup'){

    }
  }
  verifySinAccount (type) {
    let user = this.props.user
    let selector = $('#'+type)
    let val = selector.val()
    if(user.val && val == user.val.loginname){
      selector.siblings('.fui-cross').attr('title', '用户名已被注册,请重新输入')
      selector.siblings('.fui-cross').show()
      this.setState({canAccount: false})
    }else if(!val || val.length <=4){
      selector.siblings('.fui-cross').attr('title', '用户名长度等不符合要求,请重新输入')
      selector.siblings('.fui-cross').show()
      this.setState({canAccount: false})
    }else{
      selector.siblings('.fui-cross').attr('title', '')
      selector.siblings('.fui-cross').hide()
      this.setState({canAccount: true})
    }
    this.verifyCanLogin()
  }
  verifySinPassword (type) {
    let selector = $('#' + type)
    let val = selector.val()
    if(!val || val.length <=4){
      selector.siblings('.fui-cross').attr('title', '密码长度等不符合要求,请重新输入')
      selector.siblings('.fui-cross').show()
      this.setState({canPassword: false})
    }else{
      selector.siblings('.fui-cross').attr('title', '')
      selector.siblings('.fui-cross').hide()
      this.setState({canPassword: true})
    }
    this.verifyCanLogin()
  }
  verifySinRePassword (type) {
    let selector = $('#' + type)
    let pass = $('#sinPassword').val()
    let repass = selector.val()
    if(!repass || repass != pass) {
      selector.siblings('.fui-cross').attr('title', '密码验证出错,请重新输入')
      selector.siblings('.fui-cross').show()
      this.setState({canRePassword: false})
    }else{
      selector.siblings('.fui-cross').attr('title', '')
      selector.siblings('.fui-cross').hide()
      this.setState({canRePassword: true})
    }
    this.verifyCanLogin()
  }
  clearAll (type) {
    let selector = $('#' + type)
    selector.siblings('.fui-cross').attr('title', '')
    selector.siblings('.fui-cross').hide()
  }
  singUp () {

  }
  verifyCanSinup (type) {
    let canLogin = this.state.canLogin
    if(!canLogin){
      $('#' + type).css('cursor', 'not-allowed')
    }else{
      $('#' + type).css('cursor', 'pointer')
    }
  }
  verifyCanLogin () {
    let { canAccount, canPassword, canRePassword } = this.state
    console.log(canPassword,canAccount,canRePassword)
    if(canAccount && canPassword && canRePassword){
      console.log('xxxxxxx')
      this.setState({canLogin: true})
    }
  }
}


