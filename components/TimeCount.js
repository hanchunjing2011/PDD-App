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
export default class TimeCount extends Component {
  constructor(){
    super()
  }
  componentDidMount() {
    this.timeCount(360000)     
  }
  render(){
    return (
      <div className="TimeCount drag TimeCount-default">
        <span id="hour_1">0</span>
        <span id="hour_2">1</span>
        <span className="maohao">:</span>
        <span id="min_1">0</span>
        <span id="min_2">1</span>
        <span className="maohao">:</span>
        <span id="second_1">0</span>
        <span id="second_2">1</span>
      </div>
    )
  }
  timeCount (total) {
    var hour_part = null;
    var hour_1 = 0;
    var hour_2 = 0;

    var num = null;
    var min_part = 0;
    var min_1 = 0;
    var min_2 = 0;

    var seconds = null;
    var sec_1 = 0;
    var sec_2 = 0;


    $("#second_2").text(sec_2);
    $("#second_1").text(sec_1);
    $("#min_2").text(min_2);
    $("#min_1").text(min_1);
    $("#hour_2").text(hour_2);
    $("#hour_1").text(hour_1);

    //var sec_1 = null;
   var end = setInterval(function(){
      total--;
      hour_part = Math.floor(total/3600); 
      if(hour_part>10){
        hour_2 = hour_part%10;
        hour_1 = Math.floor(hour_part/10);
      }else if(hour_part == 10){
        hour_2 = 0;
        hour_1 = 1;
      } else{
        hour_1 = 0;
        hour_2 = hour_part;
      }

      num = total-hour_part*3600;
      min_part = Math.floor(num/60);
      if(min_part>10){
        min_2 = min_part%10;
        min_1 = Math.floor(min_part/10);
      }else if(min_part == 10){
        min_2 = 0;
        min_1 = 1;
      }else{
        min_2 = min_part;
        min_1 = 0;
      }

      seconds = num - min_part*60;
      if(seconds>10){
        sec_2 = seconds%10;
        sec_1 = Math.floor(seconds/10);
      }else if(seconds == 10){
        sec_2 = 0;
        sec_1 = 1;
      }else{
        sec_2 = seconds;
        sec_1 = 0;
      }

      $("#second_2").text(sec_2);
      $("#second_1").text(sec_1);
      $("#min_2").text(min_2);
      $("#min_1").text(min_1);
      $("#hour_2").text(hour_2);
      $("#hour_1").text(hour_1);
      if(sec_2 ==0&&sec_1 == 0&& min_2 ==0&&min_1 ==1&&hour_2 ==0&&hour_1 ==0){

      }
      
      if(sec_2 ==0&&sec_1 == 0&& min_2 ==0&&min_1 ==0&&hour_2 ==0&&hour_1 ==0){

      }   
    },1000);
  }
}