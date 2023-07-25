export class Character {
  constructor(type,[items]) {
    this.type = type;
    this.items = items;
    this.hp = 100;
    this.attackPower = 0;
    this.armor = 0;
    this.speed = 0;
    this.level = 1;  
  }

  setAttackPower() {
    this.dice = Math.floor(Math.random() * 10) + 1;
    this.attackPower += this.dice;
  }

  setspeed(
    
  )
}

export class Enemy {
  constructor(name) {
    this.name = name
    this.hp = Math.floor(Math.random() * 200) + 1;
    this.attackPower = Math.floor(Math.random() * 20) + 1;
    this.armor = Math.floor(Math.random() * 20) + 1;
    this.speed = Math.floor(Math.random() * 20) + 1;
    this.tech = Math.floor(Math.random() * 20) + 1;
  }
}

export class Game {
  constructor() {
    this.players = [new Character(0)];
    this.activePlayer = 0;
    this.dice = 0;
  }

  generateEnemy() {

  }
}

//const humanCharacter = new Character("Human", ["armor"])
//humanCharacter.attackPower = 20;
//humanCharacter.hp = 100;
//humanCharacter.level = 1;

const alienCharacter = new Character("Alien",["armor"])