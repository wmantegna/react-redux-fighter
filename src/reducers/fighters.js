import { Fighter } from '../lib/fighter';

const defaultSkillPoints = 2;
const defaultState = [
  new Fighter(defaultSkillPoints),
  Fighter.generateRandom(defaultSkillPoints)
];

const fighters = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_FIGHTER':
      return state.map(fighter => {
        if (fighter.id === action.id){
          let updates = {};
          
          updates['skillPoints'] = fighter.skillPoints - 1;
          updates[action.stat] = fighter[action.stat] + action.value;

          return Object.assign(new Fighter(), fighter, updates);
        } else {
          return fighter;
        }
      });
    default:
      return state
  }
}

export default fighters