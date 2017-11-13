import { combineReducers } from 'redux'
import fighters from './fighters'
import turns from './turns'

const fighterApp = combineReducers({
  fighters,
  turns
})

export default fighterApp