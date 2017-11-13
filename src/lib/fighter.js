import { calcRandomCeil } from './calculator';

import Chance from 'chance';
let chance = new Chance();



let _nextFighterId = 1;

export class Fighter {
  constructor(skillPoints = 10){
    // auto-generate
    this.id = _nextFighterId++;

    // params-based
    this.skillPoints = skillPoints;

    // assign default values
    this.name = '';
    this.attack = 0;
    this.defense = 0;
    this.health = 10;
    this.healthLeft = 10;

    return this; // enable chaining
  }

  calculateAttack(){
    return calcRandomCeil(this.attack);
  }

  assignPointsRandomly(){
    this.attack = calcRandomCeil(this.skillPoints);
    this.skillPoints -= this.attack;

    this.defense = calcRandomCeil(this.skillPoints);
    this.skillPoints -= this.defense;

    // NOTE: health is restored when applying skillPoints
    this.health = 10 + this.skillPoints;
    this.healthLeft = 10 + this.skillPoints;
    
    this.skillPoints = 0;

    return this; // enable chaining
  }

  static generateRandom(startingPoints){
    let obj = new Fighter(startingPoints);
    obj.name = chance.first();
    
    obj.assignPointsRandomly();
    
    return obj;
  }
}