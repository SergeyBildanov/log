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