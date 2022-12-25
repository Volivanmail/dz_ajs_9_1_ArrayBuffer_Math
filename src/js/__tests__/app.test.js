import Magician from '../Magician';
import Daemon from '../Daemon';

const magician = new Magician(80, 100);
const daemon = new Daemon(100, 100);

test('attack without stoned', () => {
  expect(magician.getAttack(7)).toBe(40);
});

test('attack with stoned', () => {
  daemon.stoned = true;
  expect(daemon.getAttack(5)).toBe(48);
});

test('attack on the hero', () => {
  daemon.setAttack(40);
  expect(daemon.health).toBe(60);
});

test('checking for incorrect distance', () => {
  expect(magician.getAttack(-7)).toBe(0);
});
