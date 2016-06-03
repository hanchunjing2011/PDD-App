import { combineReducers } from 'redux'
import { 
  music,
  user,
  photo,
  config,
  todo,
  diary,
  skin
 } from './reducers'

const rootReducer = combineReducers({
  music,
  user,
  photo,
  config,
  todo,
  diary,
  skin
})

export default rootReducer