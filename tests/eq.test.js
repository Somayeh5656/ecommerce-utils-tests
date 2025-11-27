import eq from '../src/eq.js';

describe('eq()', () => {
  test('compares identical references', () => {
    const a = {x: 1};
    expect(eq(a, a)).toBe(true);
  });

  test('different objects not equal', () => {
    expect(eq({x:1}, {x:1})).toBe(false);
  });

  test('same strings equal', () => {
    expect(eq('a', 'a')).toBe(true);
  });

  test('NaN equals NaN', () => {
    expect(eq(NaN, NaN)).toBe(true);
  });
});
