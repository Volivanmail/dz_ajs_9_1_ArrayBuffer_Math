import Hero from './app';

export default class Magician extends Hero {
  constructor(health, attack, stoned) {
    super(health, attack, stoned);
    this.health = 80;
    this.attack = 100;
  }
}
