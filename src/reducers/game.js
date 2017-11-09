
const generateFighter = (numPoints) => {

  let attack = Math.ceil(Math.random() * numPoints);
  numPoints -= attack;

  let defense = Math.ceil(Math.random() * numPoints);
  numPoints -= defense;
  
  return {
    health: 10 + numPoints,
    attack: attack,
    defense: defense,
    skillPoints: 0
  };
};

const computerStartingPoints = 5;
const defaultState = {
  computer: generateFighter(computerStartingPoints)
};

const myFighter = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default myFighter