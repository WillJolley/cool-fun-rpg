import { Character } from '../src/rpg';

describe('Character', () => {
  
  test('should create a character with a type, an item inventory, health of 100, level of 1, and attributes set to 0', () => {
    const newCharacter = new Character("Scientist", ["geiger-counter"]);
    expect(newCharacter.type).toEqual("Scientist");
    expect(newCharacter.items).toEqual("geiger-counter");
    expect(newCharacter.hp).toEqual(100);
    expect(newCharacter.level).toEqual(1);
    expect(newCharacter.armor).toEqual(0);   
    expect(newCharacter.attackPower).toEqual(0);
    expect(newCharacter.speed).toEqual(0);
    expect(newCharacter.armor).toEqual(0);
  });

  test('should set characters attackPower to a random number between 1 and 10', () => {
    const newCharacter = new Character("dude", ["thing"]);
    newCharacter.setAttackPower;
    expect(newCharacter.attackPower).toBeLessThanOrEqual(10);
  });
})