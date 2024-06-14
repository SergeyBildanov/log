import Character from "../Character";

test("Setting stone", ()=>{
    let character = new Character();
    character.stoned = true;
    expect(character.isStoned).toBe(true);
})
test("Getting stone", ()=>{
    let character = new Character();
    character.stoned = true;
    expect(character.stoned).toBe(true);
})
test("setting attack", ()=>{
  let character = new Character();
  character.setAttack();
  expect(character.attack).toBe(100);
})
test("getting attack", ()=>{
  let character = new Character();
  character.setAttack();
  expect(character.getAttack(4)).toBe(70);
})
test("getting stoned attack", ()=>{
  let character = new Character();
  character.setAttack();
  character.stoned = true;
  expect(character.getAttack(4)).toBe((100*(1-0.1*3))-Math.log2(4)*5);
})