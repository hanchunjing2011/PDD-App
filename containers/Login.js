import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { dispatch } from '../redux/store/renderStore'
import { newStatus, newUser } from '../redux/actions/actions'
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
      canAccount: false,
      canPassword: false,
      canRePassword: false
    }
  }
  componentWillUpdate(nextProps, nextState) {
    let { canAccount, canPassword, canRePassword } = nextState
    if(canAccount && canPassword && canRePassword){
      $('#sinupAccount').css("cursor","pointer")
    }else{
      $('#sinupAccount').css('cursor', 'not-allowed')
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
          <input type="text" id="sinAccount" className="form-control" placeholder="account" onKeyUp={() => {this.verifySinAccount('sinAccount')}} onFocus={() => {this.clearAll('sinAccount');}} onBlur={() => {this.verifySinAccount('sinAccount')}}/>
        </div>
        <div className="input-group sinup-group">
          <span className="fui-cross"></span>
          <input type="password" id="sinPassword" className="form-control" placeholder="password" onKeyUp={() => {this.verifySinPassword('sinPassword')}} onFocus={() => {this.clearAll('sinPassword');}} onBlur={() => {this.verifySinPassword('sinPassword')}}/>
        </div>
        <div className="input-group sinup-group">
          <span className="fui-cross"></span>
          <input type="password" id="sinRePassword" className="form-control" placeholder="repassword" onKeyUp={() => {this.verifySinRePassword('sinRePassword')}} onFocus={() => {this.clearAll('sinRePassword');}} onBlur={() => {this.verifySinRePassword('sinRePassword')}}/>
        </div>
        <div className="button-box sinup">
          <button id="sinupAccount" className="btn btn-hg btn-primary sinup left" onClick={() => {this.singUp()}}>完成注册</button>
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
    console.log()
    let selector = $('#'+type)
    let val = selector.val()
    if(user[val] && val == user[val].loginname){
      console.log('get in')
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
  }
  clearAll (type) {
    let selector = $('#' + type)
    selector.siblings('.fui-cross').attr('title', '')
    selector.siblings('.fui-cross').hide()
  }
  singUp () {
    const { canAccount, canPassword, canRePassword } = this.state
    if(canAccount && canPassword && canRePassword){
      const account = $('#sinAccount').val()
      const password = $('#sinPassword').val()
      var obj = {
        loginname: account,
        password: password
      }
      conv.set('users:'+account,obj)
      conv.save()
      let status = this.props.status
      let loginStatus = status.loginStatus
      let user = this.props.user
      user.account = obj
      loginStatus.loging = true
      setTimeout(() => {
        dispatch(newStatus(status))
      },200)
      dispatch(newUser(user))
    }
  }
}


