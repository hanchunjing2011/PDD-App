import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import $ from 'jquery'
import { conv } from '../common/config'
import { skinConv } from '../common/skin'
import { ipcRenderer } from 'electron'
import { window_show, window_close, window_focus, window_open } from '../communicate/communicationTypes'
import { todo as todoOptions } from '../renderProcess/winOptions'



//这个是用来绑定state的   这边用不着  可以去掉
@connect((state) => {
  return {
    skin: state.skin
  }
})
export default class SlideList extends Component {
  constructor(){
    super()
  }
  componentDidMount() {

  }
  render(){
    return (
      <ul className="SlideList nodrag SlideList-default">
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
    )
  }
}