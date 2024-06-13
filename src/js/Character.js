export default class Character {
    constructor(){
    }
    set stoned(status){
        this.isStoned = status;
    }
    get stoned(){
        return this.isStoned;
    }
}