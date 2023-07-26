import { Character, Enemy } from '../src/rpg';

describe('Character', () => {
  let newCharacter;

  beforeEach(() => {
    newCharacter = new Character("dude", "thing");
  });
  
  test('should create a character with a type, an item inventory, health of 100, and level of 1', () => {
    expect(newCharacter.type).toEqual("dude");
    expect(newCharacter.items).toEqual("thing");
    expect(newCharacter.hp).toEqual(100);
    expect(newCharacter.level).toEqual(1);
  });

  test('should set characters attackPower to a random number between 1 and 10', () => {
    newCharacter.setAttackPower();
    expect(newCharacter.attackPower).toBeLessThanOrEqual(10);
    expect(newCharacter.attackPower).toBeGreaterThan(0);
  });

  test('should set characters armor to a random number between 1 and 10', () => {
    newCharacter.setArmor();
    expect(newCharacter.armor).toBeLessThanOrEqual(10);
    expect(newCharacter.armor).toBeGreaterThan(0);
  });

  test('should set characters speed to a random number between 1 and 10', () => {
    newCharacter.setSpeed();
    expect(newCharacter.speed).toBeLessThanOrEqual(10);
    expect(newCharacter.speed).toBeGreaterThan(0);
  });
})

describe('Enemy', () => {
   let enemy; 

   beforeEach(() => {
    enemy = new Enemy("aggro-alien");
   });

  test('should create an enemy with a name', () => {
    expect(enemy.name).toEqual("aggro-alien");
  });

  test("should set enemy Hp to a random number betweem 1 and 200" , () => {
    expect(enemy.hp).toBeGreaterThan(0);
    expect(enemy.hp).toBeLessThanOrEqual(200);
  });

  test('should set enemy speed to a random number between 1 and 20', () => {
    expect(enemy.speed).toBeGreaterThan(0);
    expect(enemy.speed).toBeLessThanOrEqual(20);
  });
  
  test('should create enemy with armor value of a random number between 1 and 20', () => {
    expect(enemy.armor).toBeGreaterThan(0);
    expect(enemy.armor).toBeLessThanOrEqual(20);
  });

  test('should create enemy with attack power value of a random number between 1 and 20', () => {
    expect(enemy.attackPower).toBeGreaterThan(0);
    expect(enemy.attackPower).toBeLessThanOrEqual(20);
  });

})