import Daemon from "./Daemon";
import Magician from "./Magician";

console.log('worked');

let magician = new Magician();
let daemon = new Daemon();

daemon.stoned = true;
magician.setAttack();
daemon.setAttack();
console.log(daemon.getAttacK(4));
console.log(magician.getAttacK(4));
