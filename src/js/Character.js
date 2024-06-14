export default class Character {
    constructor(){
        this.setAttack = function(){
            this.attack = 100;
        };
        this.getAttack = function(x) {
            let newAttack = this.attack;
            newAttack = newAttack*(1- 0.1*(x-1)); 
            if(this.stoned){
              return newAttack - 5*Math.log2(x);
            }
            return newAttack;
        };
    }
    set stoned(status){
        this.isStoned = status;
    }
    get stoned(){
        return this.isStoned;
    }
}