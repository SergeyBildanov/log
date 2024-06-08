import Daemon from "./Daemon";
import Magician from "./Magician";

console.log('worked');

let magician = new Magician();
let daemon = new Daemon();

daemon.stoned = true;
magician.attackPoints = 5;
daemon.attackPoints = 3;
console.log(daemon.attackPoints);
console.log(magician.attackPoints);
