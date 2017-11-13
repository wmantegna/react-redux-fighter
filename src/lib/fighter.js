import { calcRandomCeil } from './calculator';

let _nextFighterId = 1;

export class Fighter {
  constructor(skillPoints = 10){
    this.id = _nextFighterId++;
    this.attack = 0;
    this.defense = 0;
    this.health = 10;
    this.healthLeft = 10;
    this.skillPoints = skillPoints;

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
    
    obj.assignPointsRandomly();
    
    return obj;
  }
}