import bunyan from 'bunyan'
import fs from 'fs'
import path from 'path'
import { LOGPATH } from './contants'
import uuid from 'uuid'


const d = new Date()
const date = d.getFullYear().toString() + (d.getMonth() + 1).toString() + d.getDate().toString()
//月份要加上1   里面是有故事的

const logfile = LOGPATH+path.sep + uuid() + '.log'




export const logger = bunyan.createLogger({
  name: 'myapp',
  streams: [
    {
      level: 'info',
      stream: process.stdout            // log INFO and above to stdout
    },
    {
      level: 'info',
      path: logfile  // log ERROR and above to a file
    }
  ]
});
//获取到logger