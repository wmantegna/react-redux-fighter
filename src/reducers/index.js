import { combineReducers } from 'redux'
import myFighter from './myFighter'
import game from './game'

const fighterApp = combineReducers({
  myFighter,
  game
})

export default fighterApp