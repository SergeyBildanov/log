import Character from "../Character";

test("Setting stone", ()=>{
    let character = new Character(4);
    character.stoned = true;
    expect(character.isStoned).toBe(true);
})
test("Getting stone", ()=>{
    let character = new Character(4);
    character.stoned = true;
    expect(character.stoned).toBe(true);
})
test("setting attack", ()=>{
  let character = new Character(4);
  character.attackPoints = 100;
  expect(character.attack).toBe(100);
})
test("getting attack", ()=>{
  let character = new Character(4);
  character.attackPoints = 100;
  expect(character.attackPoints).toBe(70);
})
test("getting stoned attack", ()=>{
  let character = new Character(4);
  character.attackPoints = 100;
  character.stoned = true;
  expect(character.attackPoints).toBe((100*(1-0.1*3))-Math.log2(4)*5);
})