let _nextTurnId = 1;

export class Turn {
  constructor(fighter1Action, fighter1Damage, fighter2Action, fighter2Damage){
    this.id = _nextTurnId++;
    this.fighter1 = {
      action: fighter1Action,
      damage: fighter1Damage
    };
    this.fighter2 = {
      action: fighter2Action,
      damage: fighter2Damage
    };

    this.description = this.buildDescription();
  }

  buildDescription(){
    let fighter1Attacks = this.fighter1.action === 'ATTACK';
    let fighter2Attacks = this.fighter2.action === 'ATTACK';
    let str = '';

    if (fighter1Attacks && fighter2Attacks) {
      str = 'both fighters are hit with each others attacks';
    } else if (fighter1Attacks) {
      str = 'fighter1 is hit with their own attack';
    } else if (fighter2Attacks) {
      str = 'fighter2 is hit with their own attack';
    } else {
      str = 'both fighters reflect, meaning they\'re hit with the average of their attacks';
    }

    return str;
  }

  // TODO: type-check for typeof(fighter1) === 'Fighter' && typeof(fighter2) === 'Fighter'
  static calculate(fighter1, fighter1Action, fighter2, fighter2Action){
    let fighter1Attacks = fighter1Action === 'ATTACK';
    let fighter2Attacks = fighter2Action === 'ATTACK';
  
    let fighter1Damage = 0;
    let fighter2Damage = 0;
  
    let fighter1Attack = fighter1.calculateAttack();
    let fighter2Attack = fighter2.calculateAttack();
  
    if (fighter1Attacks && fighter2Attacks) {
      // both fighters are hit with each others attacks
      fighter1Damage = fighter1Attack;
      fighter2Damage = fighter2Attack;
    } else if (fighter1Attacks) {
      // fighter1 is hit with their own attack
      fighter1Damage = fighter1Attack;
    } else if (fighter2Attacks) {
      // fighter2 is hit with their own attack
      fighter2Damage = fighter2Attack;
    } else {
      // both fighters reflect, meaning they're hit with the average of their attacks
      fighter1Damage = fighter1Attack;
      fighter2Damage = fighter2Attack;
    }
  
    return new Turn(fighter1Action, fighter1Damage, fighter2Action, fighter2Damage);
  }
  
  static calculateRandomAction(){
    let val = Math.floor(Math.random() * 2);
    
    return val === 0 ? 'ATTACK' : 'REFLECT';
  }
}