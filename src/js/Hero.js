export default class Hero {
  constructor(health, attack) {
    this.health = health;
    this.attack = attack;
    this.stoned = false;
  }

  get stoned() {
    return this.stoned;
  }

  set stoned(value) {
    this.stoned = value;
  }

  setAttack(value) {
    this.health -= value;
  }

  getAttack(distance) {
    if (distance > 10 || distance < 1) {
      return 0;
    }
    let attackPower = this.attack * ((11 - distance) / 10);
    if (this.stoned) {
      attackPower -= Math.log2(distance) * 5;
    }
    return Math.round(attackPower);
  }
}
