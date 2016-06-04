import path from 'path'


const sep = path.sep
const ROOT = path.resolve(__dirname, '../')
const CONFIGPATH = path.resolve(__dirname, '../', 'config')
const CONFIG = 'config.json'
const LOG = path.resolve(__dirname, '../', 'logs')
const DBPATH = path.resolve(__dirname, '../', 'db')
const SKINPATH = path.resolve(__dirname, '../', 'config')
const SKIN = 'skin.json'
const DB = 'database.db'
export { ROOT, CONFIGPATH, CONFIG, LOG, DB, SKINPATH, SKIN }

