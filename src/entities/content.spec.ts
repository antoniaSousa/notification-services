import { Content } from './content';

test('it should be able te create a notification content', () => {
  const content = new Content('Voce recebeu uma nova notificação');

  expect(content).toBeTruthy();
});

test('it should not be able te create a notification content', () => {
  expect(() => new Content('ZZX')).toBeTruthy();
});
