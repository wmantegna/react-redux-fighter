export const updateFighter = (id, stat, value) => {
  return {
    type: 'UPDATE_FIGHTER',
    id: id,
    stat: stat,
    value: value
  }
}

export const takeTurn = (action, fighter1, fighter2) => {
  return {
    type: 'ADD_TURN',
    fighter1: fighter1,
    fighter1Action: action,
    fighter2: fighter2
  }
}