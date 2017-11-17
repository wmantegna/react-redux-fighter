import { Turn } from '../lib/turn';

const defaultState = [];

const turns = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TURN':
      let fighter2Action = Turn.calculateRandomAction();
      let newTurn = Turn.calculate(action.fighter1, action.fighter1Action, action.fighter2, fighter2Action);

      return [...state.slice(0, state.length), newTurn]
    default:
      return state
  }
}

export default turns
