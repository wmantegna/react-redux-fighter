let nextFighterId = 0
export const addFighter = text => {
  return {
    type: 'ADD_FIGHTER',
    id: nextFighterId++,
    text
  }
}

export const updateMyFighter = (stat, value) => {
  // type: 'UPDATE_MY_' + stat.toUpperCase(),
  return {
    type: 'UPDATE_MY_SKILLS',
    stat: stat,
    value: value
  }
}
