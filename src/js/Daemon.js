import Hero from './Hero';

export default class Daemon extends Hero {
  constructor(health, attack) {
    super(health, attack);
    this.type = 'Daemon';
  }
}
