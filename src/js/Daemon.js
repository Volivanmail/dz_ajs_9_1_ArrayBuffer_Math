import Hero from './Hero';

export default class Daemon extends Hero {
  constructor(health, attack, stoned) {
    super(health, attack, stoned);
    this.health = 100;
    this.attack = 100;
  }
}
