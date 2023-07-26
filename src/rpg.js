export class Character {

  /**
   * @param {string} type
   * @param {string[]} items
   */
  constructor(type, items) {
    this.type = type;
    this.items = items;
  }
  
  hp = 100;
  attackPower = 0;
  armor = 0;
  speed = 0;
  level = 1;
  dice;

  setAttackPower() {
    this.dice = Math.floor(Math.random() * 10) + 1;
    this.attackPower += this.dice;
  }

  setSpeed() {
    this.dice = Math.floor(Math.random() * 10) + 1;
    this.speed += this.dice
  }

  setArmor() {
    this.dice = Math.floor(Math.random() * 10) + 1;
    this.armor += this.dice;
  } 
}

export class Enemy {
  constructor(name) {
    this.name = name
  }

  hp = Math.floor(Math.random() * 200) + 1;
  attackPower = Math.floor(Math.random() * 20) + 1;
  armor = Math.floor(Math.random() * 20) + 1;
  speed = Math.floor(Math.random() * 20) + 1;
  
}

export class Game {
  constructor() {
    this.players = [new Character(0)];
    this.activePlayer = 0;
    this.dice = 0;
  }

  

  // const enemyName = {""}
  }


//const humanCharacter = new Character("Human", ["armor"])
//humanCharacter.attackPower = 20;
//humanCharacter.hp = 100;
//humanCharacter.level = 1;

//const alienCharacter = new Character("Alien",["armor"])

const game = new Game ();

//generateEnemy() {
//const enemy = game.generateEnemy();
//const

