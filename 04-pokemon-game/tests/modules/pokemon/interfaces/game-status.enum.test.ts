import { GameStatus } from '@/modules/Pokemon/interfaces';

describe('GameStatus enum', () => {
  test('should have a value of "playing"', () => {
    expect(GameStatus.Playing).toBe('playing');
  });
  test('should have a value of "lost"', () => {
    expect(GameStatus.Lost).toBe('lost');
  });
  test('should have a value of "won"', () => {
    expect(GameStatus.Won).toBe('won');
  });
});
