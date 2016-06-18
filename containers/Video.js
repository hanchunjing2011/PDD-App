import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import $ from 'jquery'
import { conv } from '../common/config'
import { skinConv } from '../common/skin'
import { ipcRenderer } from 'electron'
import { window_show, window_close, window_focus, window_open } from '../communicate/communicationTypes'
import { todo as todoOptions } from '../renderProcess/winOptions'
import Header2 from '../components/Header2'


//这个是用来绑定state的   这边用不着  可以去掉
@connect((state) => {
  return {
    skin: state.skin
  }
})
export default class Video extends Component {
  constructor(){
    super()
  }
  componentDidMount() {
    $(document).ready(() => {

    })
  }
  render(){
    return (
      <div className="VideoPage drag VideoPage-default">
        <Header2 winID="video"></Header2>
        <div className="body">
          <div className="left-part">
            <ul className="videoList">
              <li className="videoItem nodrag">
                <div className="itemhover"></div>
                <div className="listitem itemtag">
                  <span className="glyphicon glyphicon-tag"></span>
                </div>
                <div className="listitem  itembody">
                  <p className="videoname">建国伟业</p>
                </div>
                <div className="listitem itemflag">
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                </div>
              </li>
              <li className="videoItem nodrag">
                <div className="itemhover"></div>
                <div className="listitem itemtag">
                  <span className="glyphicon glyphicon-tag"></span>
                </div>
                <div className="listitem  itembody">
                  <p className="videoname">建国伟业</p>
                </div>
                <div className="listitem itemflag">
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                </div>
              </li>
              <li className="videoItem nodrag">
                <div className="itemhover"></div>
                <div className="listitem itemtag">
                  <span className="glyphicon glyphicon-tag"></span>
                </div>
                <div className="listitem  itembody">
                  <p className="videoname">建国伟业</p>
                </div>
                <div className="listitem itemflag">
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                </div>
              </li>
              <li className="videoItem nodrag">
                <div className="itemhover"></div>
                <div className="listitem itemtag">
                  <span className="glyphicon glyphicon-tag"></span>
                </div>
                <div className="listitem  itembody">
                  <p className="videoname">建国伟业</p>
                </div>
                <div className="listitem itemflag">
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                </div>
              </li>
              <li className="videoItem nodrag">
                <div className="itemhover"></div>
                <div className="listitem itemtag">
                  <span className="glyphicon glyphicon-tag"></span>
                </div>
                <div className="listitem  itembody">
                  <p className="videoname">建国伟业</p>
                </div>
                <div className="listitem itemflag">
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                </div>
              </li>
              <li className="videoItem nodrag">
                <div className="itemhover"></div>
                <div className="listitem itemtag">
                  <span className="glyphicon glyphicon-tag"></span>
                </div>
                <div className="listitem  itembody">
                  <p className="videoname">建国伟业</p>
                </div>
                <div className="listitem itemflag">
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                </div>
              </li>
              <li className="videoItem nodrag">
                <div className="itemhover"></div>
                <div className="listitem itemtag">
                  <span className="glyphicon glyphicon-tag"></span>
                </div>
                <div className="listitem  itembody">
                  <p className="videoname">建国伟业</p>
                </div>
                <div className="listitem itemflag">
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                </div>
              </li>
              <li className="videoItem nodrag">
                <div className="itemhover"></div>
                <div className="listitem itemtag">
                  <span className="glyphicon glyphicon-tag"></span>
                </div>
                <div className="listitem  itembody">
                  <p className="videoname">建国伟业</p>
                </div>
                <div className="listitem itemflag">
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                </div>
              </li>
              <li className="videoItem nodrag">
                <div className="itemhover"></div>
                <div className="listitem itemtag">
                  <span className="glyphicon glyphicon-tag"></span>
                </div>
                <div className="listitem  itembody">
                  <p className="videoname">建国伟业</p>
                </div>
                <div className="listitem itemflag">
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                </div>
              </li>
              <li className="videoItem nodrag">
                <div className="itemhover"></div>
                <div className="listitem itemtag">
                  <span className="glyphicon glyphicon-tag"></span>
                </div>
                <div className="listitem  itembody">
                  <p className="videoname">建国伟业</p>
                </div>
                <div className="listitem itemflag">
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                </div>
              </li>
              <li className="videoItem nodrag">
                <div className="itemhover"></div>
                <div className="listitem itemtag">
                  <span className="glyphicon glyphicon-tag"></span>
                </div>
                <div className="listitem  itembody">
                  <p className="videoname">建国伟业</p>
                </div>
                <div className="listitem itemflag">
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                </div>
              </li>
              <li className="videoItem nodrag">
                <div className="itemhover"></div>
                <div className="listitem itemtag">
                  <span className="glyphicon glyphicon-tag"></span>
                </div>
                <div className="listitem  itembody">
                  <p className="videoname">建国伟业</p>
                </div>
                <div className="listitem itemflag">
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                </div>
              </li>
              <li className="videoItem nodrag">
                <div className="itemhover"></div>
                <div className="listitem itemtag">
                  <span className="glyphicon glyphicon-tag"></span>
                </div>
                <div className="listitem  itembody">
                  <p className="videoname">建国伟业</p>
                </div>
                <div className="listitem itemflag">
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                </div>
              </li>
            </ul>
          </div>
          <div className="right-part">
            <div className="video-box">
              <span className="noplay glyphicon glyphicon-film"></span>
              <video id="video" className="video"></video>
              <div className="video-tool">
                <span className="toolspan play glyphicon glyphicon-play"></span>
                <span className="toolspan pause glyphicon glyphicon-pause"></span>
                <div className="progress-video-nav nodrag">
                  <div className="progress-ball"></div>
                  <div className="progress progress-video nodrag">
                    <div className="progress-bar progress-bar-video"></div>
                  </div>
                </div>
                <span className="nowtime">00:00</span>
                <span className="split">/</span>
                <span className="totaltime">05:00</span>
                <span className="toolspan voice glyphicon glyphicon-volume-up">
                  <div className="progress-ball-voice"></div>
                  <div className="progress progress-voice">
                    <div className="progress-bar progress-bar-voice"></div>
                  </div>
                </span>
                <span className="toolspan large glyphicon glyphicon-unchecked"></span>
                <span className="toolspan fullscreen glyphicon glyphicon-fullscreen"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="clear"></div>
        <div className="foot">
        </div>
      </div>
    )
  }
}