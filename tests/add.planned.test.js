import add from '../src/add.js';

describe('add()', () => {
  test('ADD01: 0 + 0 = 0', () => {
    expect(add(0, 0)).toBe(0);
  });

  test('ADD02: 5 + 7 = 12', () => {
    expect(add(5, 7)).toBe(12);
  });

  test('ADD03: -5 + 3 = -2', () => {
    expect(add(-5, 3)).toBe(-2);
  });

  test('ADD04: 2.5 + 1.2 = 3.7', () => {
    expect(add(2.5, 1.2)).toBeCloseTo(3.7);
  });

  test('ADD05: NaN + 4 = NaN', () => {
    expect(add(NaN, 4)).toBeNaN();
  });

  test('ADD06: undefined + 3 = 3', () => {
    expect(add(undefined, 3)).toBe(3);
  });

  test('ADD07: "5" + 5 = 10', () => {
    expect(add(Number('5'), 5)).toBe(10);
  });

  test('ADD08: Infinity + 1 = Infinity', () => {
    expect(add(Infinity, 1)).toBe(Infinity);
  });
});
