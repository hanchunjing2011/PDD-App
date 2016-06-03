import path from 'path'
var log4js = require('log4js')
import fs from 'fs'
import { LOG } from './contants'



const  d = new Date()
let date = d.getFullYear().toString() + (d.getMonth() + 1).toString() + d.getDate().toString()
//月份要加上1   里面是有故事的

const logfile = LOG + path.sep + date + '.log'


if(!fs.existsSync(LOG)){
  fs.mkdirSync(LOG)
}


console.log(log4js)
log4js.appenders({
  appenders:[{
    type:'file',
    filename:logfile,
    'maxLogSize':2048000,
    category:'cheese'
  }]
})

//获取到logger
// export const logger = log4js.getLogger('cheese')
export const logger = log4js.getLogger('cheese')
