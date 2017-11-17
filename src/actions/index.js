export const updateFighter = (id, stat, value) => {
  return {
    type: 'UPDATE_FIGHTER_SKILL',
    id: id,
    stat: stat,
    value: value
  }
}

export const updateFighterName = (id, name) => {
  return {
    type: 'UPDATE_FIGHTER_NAME',
    id: id,
    name: name
  }
}

export const addFighterDamage = (id, damage) => {
  return {
    type: 'UPDATE_FIGHTER_FROM_TURN',
    id: id,
    damage: damage
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

export const takeTurnAndUpdateFighters = (action, fighter1, fighter2) => {
  return (dispatch, getState) => {
    // calculate turn results
    dispatch(
      takeTurn(action, fighter1, fighter2)
    );

    // use turn results to update 'fighters' branch in store
    const {turns} = getState();    
    let lastTurn = turns[turns.length - 1];
    let turnFighters = [lastTurn.fighter1, lastTurn.fighter2];

    turnFighters.forEach((fighter) => {
      if (fighter.damage > 0){
        dispatch(addFighterDamage(fighter.id, fighter.damage));
      }
    });
  };
}