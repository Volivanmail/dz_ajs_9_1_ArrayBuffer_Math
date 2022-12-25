import Hero from './Hero';

export default class Magician extends Hero {
  constructor(health, attack) {
    super(health, attack);
    this.type = 'Magician';
  }
}
