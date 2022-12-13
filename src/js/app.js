/* eslint-disable no-underscore-dangle */
export default class Hero {
  constructor(health, attack) {
    this.health = health;
    this.attack = attack;
    this._stoned = false;
  }

  // eslint-disable-next-line class-methods-use-this
  get stoned() {
    return true;
  }

  set stoned(value) {
    this._stoned = value;
  }

  setAttack(value) {
    this.health -= value;
  }

  getAttack(distance) {
    if (distance > 10 || distance < 1) {
      return 0;
    }
    let attackPower = this.attack * ((11 - distance) / 10);
    if (this._stoned) {
      attackPower -= Math.log2(distance) * 5;
    }
    return Math.round(attackPower);
  }
}
