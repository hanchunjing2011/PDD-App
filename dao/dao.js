import sqlite3 from 'sqlite3'
import bookshelf from 'bookshelf'
import { DB } from '../common/contants'
import path from 'path'











let userDB = null
const sep = path.sep
const sqlite = sqlite3.verbose()
const file = DB + sep + 'database.db'

if(!fs.existsSync(DB)){
  fs.mkdirSync(DB)
}



export const dao = {
  setDB: function () {
    userDB = new sqlte.Database(file)
    let userORM = dao.userORM = bookshelf.initialize({
      client: 'sqlite3',
      connection: {
        filename: file
      }
    })
    this.userDB = userDB
  }
}


