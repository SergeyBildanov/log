import Magician from "../Magician";

test("Attack without stone", ()=>{
  let magician = new Magician();
  magician.attackPoints= 4;
  expect(magician.attackPoints).toBe(70);
})
test("Attack with stone", ()=>{
  let magician = new Magician();
  magician.stoned = true;
  magician.attackPoints = 4;
  expect(magician.attackPoints).toBe((100*(1-0.1*3))-Math.log2(4)*5);
})

