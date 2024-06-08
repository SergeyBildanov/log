import Daemon from "../Daemon";

test("Attack without stone", ()=>{
  let daemon = new Daemon();
  daemon.attackPoints= 4;
  expect(daemon.attackPoints).toBe(70);
})
test("Attack with stone", ()=>{
  let daemon = new Daemon();
  daemon.stoned = true;
  daemon.attackPoints= 4;
  expect(daemon.attackPoints).toBe((100*(1-0.1*3))-Math.log2(4)*5);
})
