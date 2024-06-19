export default class Character {
    constructor(distance){
        this.distance = distance;
    }
    set attackPoints(x){
        this.attack = x;
    }
    get attackPoints(){
        if(this.stoned){
            return this.attack*(1 - 0.1*(this.distance - 1)) - Math.log2(this.distance) * 5;
        }
        return this.attack*(1 - 0.1*(this.distance-1))
    }
    set stoned(status){
        this.isStoned = status;
    }
    get stoned(){
        return this.isStoned;
    }
}