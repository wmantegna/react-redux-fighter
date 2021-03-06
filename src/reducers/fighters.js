import { Fighter } from '../lib/fighter';

const defaultSkillPoints = 2;
const defaultState = [
  new Fighter(defaultSkillPoints),
  Fighter.generateRandom(defaultSkillPoints)
];

const fighters = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_FIGHTER_NAME':
      return state.map(fighter => 
        (fighter.id === action.id) 
        ? {...fighter, name: action.name}
        : fighter
      );
    case 'UPDATE_FIGHTER_SKILL':
      return state.map(fighter => {
        if (fighter.id === action.id){
          let updates = {};
          
          updates['skillPoints'] = fighter.skillPoints - 1;
          updates[action.stat] = fighter[action.stat] + action.value;
          
          // special case for health & health left (healthLeft is replenished when health is leveled)
          if (action.stat === 'health'){
            updates['healthLeft'] = updates['health'];
          }

          return Object.assign(new Fighter(), fighter, updates);
        } else {
          return fighter;
        }
      });
    case 'UPDATE_FIGHTER_FROM_TURN':
      return state.map(fighter => {
        if (fighter.id === action.id) {
          let newHealth = (fighter.healthLeft - action.damage);
          let updates = { healthLeft: newHealth };

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