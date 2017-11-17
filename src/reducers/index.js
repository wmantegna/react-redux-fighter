import { combineReducers } from 'redux'
import fighters from './fighters'
import turns from './turns'

const rootReducer = combineReducers({
  fighters,
  turns
})

export default rootReducer
