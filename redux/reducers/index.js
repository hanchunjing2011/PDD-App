import { combineReducers } from 'redux'
import { 
  music,
  user,
  photo,
  config,
  todo,
  diary,
  skin,
  status
 } from './reducers'

const rootReducer = combineReducers({
  music,
  user,
  photo,
  config,
  todo,
  diary,
  skin,
  status
})

export default rootReducer