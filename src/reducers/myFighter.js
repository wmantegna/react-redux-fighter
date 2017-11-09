const defaultState = {
  attack: 0,
  defense: 0,
  health: 10,
  skillPoints: 10
};

const myFighter = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_MY_SKILLS':
      var updates = {
        skillPoints: state.skillPoints - 1
      };
      updates[action.stat] = state[action.stat] + action.value;

      return Object.assign({}, state, updates);
    default:
      return state
  }
}

export default myFighter