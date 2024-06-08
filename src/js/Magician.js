export default class Magician{
  constructor(){
    this.attack = 100;
    this.isStoned = false; 
  }
  set stoned(status){
    this.isStoned = status;
  }
  get stoned(){
    return this.isStoned;
  }
  set attackPoints(x){
    let newAttack = this.attack;
    newAttack = newAttack*(1- 0.1*(x-1)); 
    if(this.stoned){
      newAttack = newAttack - 5*Math.log2(x);
    }
    this.attack = newAttack;
  }
  get attackPoints(){
    return this.attack;
  }
}