const defaultState = {
  health: 100,
  attack: 0,
  defense: 0
};

const myFighter = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_MY_FIGHTER':
      const stat = action.stat;
      let value = state[stat] + action.value;

      return Object.assign({}, state, {
        stat: value,
      });  
    default:
      return state
  }
}

export default myFighter