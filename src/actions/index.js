let nextFighterId = 0
export const addFighter = text => {
  return {
    type: 'ADD_FIGHTER',
    id: nextFighterId++,
    text
  }
}

export const updateMyFighter = (stat, value) => {
  return {
    type: 'UPDATE_MY_' + stat.toUpperCase(),
    value
  }
}