import Character from "./Character";
export default class Magician extends Character{
  constructor(){
    super();
  }
  set attackPoints(x){
    this.attack = 100;
    this.distance = x;
  }
  get attackPoints(){
    let newAttack = this.attack;
    newAttack = newAttack*(1- 0.1*(this.distance-1)); 
    if(this.stoned){
      return newAttack - 5*Math.log2(this.distance);
    }
    return newAttack;
  }
}