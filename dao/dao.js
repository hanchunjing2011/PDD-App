import { DB, DBPATH } from '../common/contants'
import path from 'path'
import nedb from 'nedb'
import fs from 'fs'



const dbfile = DBPATH + path.sep + DB 
if(fs.existsSync(DBPATH)){
  fs.mkdirSync(DBPATH)
}

if(fs.existsSync(dbfile)){
  fs.mkdirSync(dbfile)
}

const db = new nedb({
  filename: '../db/database.db'
})
db.loadDatabase(function (err){
})

let doc = {
  hello:'hello',
  n:5,
  today:new Date()
}

db.insert(doc, function (err, newDOC){
})



db.insert([{n:5,hello:'xxx'},{n:5,hello:'dddd'}])


db.find({n:5}, function (err, docs){
  console.log(docs)
})


