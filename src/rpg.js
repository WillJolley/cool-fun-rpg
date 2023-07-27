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

  generateCharacter(type, items) {
    const newCharacter = new Character(type, items);
    this.characters.push(newCharacter);
  }

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

  calcHealthLoss(damage) {
    const netDamage = damage - this.armor / 2;
    this.hp -= netDamage;

  }
}

export class Enemy {
  constructor(name) {
    this.name = name
  }

  isAlive = true;
  hp = Math.floor(Math.random() * 200) + 1;
  attackPower = Math.floor(Math.random() * 20) + 1;
  armor = Math.floor(Math.random() * 20) + 1;
  speed = Math.floor(Math.random() * 20) + 1;

  calcHealthLoss(damage) {
    const netDamage = damage - this.armor / 2;
    this.hp -= netDamage;

  }

}

export class Game {
  /**
   * @param {Character[]} players
   */
  constructor(players) {
    this.players = players;
  }

  
  /**
   * @type {Enemy[]}
  */
 enemies = []
 
  /**
    * @type {Character}
  */
  activePlayer;
  dice = 0;

  nextTurn() {
    const player = this.players[this.activePlayer];
    const enemy = this.enemies[0];

    enemy.calcHealthLoss(player.attackPower);

    if(enemy <= 0) {
      this.enemies.shift();
    }

    this.activePlayer = (this.activePlayer + 1) % this.players.length;
  }
  generateEnemy(name) {
    const newEnemy = new Enemy(name);
    this.enemies.push(newEnemy);
  }

}