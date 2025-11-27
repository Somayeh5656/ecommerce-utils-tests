import ceil from '../src/ceil.js';

describe('ceil()', () => {
  test('CEIL01: 4.01 with precision 0 = 5', () => {
    expect(ceil(4.01, 0)).toBe(5);
  });

  test('CEIL02: 6.001 with precision 2 = 6.01', () => {
    expect(ceil(6.001, 2)).toBe(6.01);
  });

  test('CEIL04: 6040 with precision -2 = 6100', () => {
    expect(ceil(6040, -2)).toBe(6100);
  });

  test('CEIL05: -4.2 with precision 0 = -4', () => {
    expect(ceil(-4.2, 0)).toBe(-4);
  });

  test('CEIL06: 1.999 with precision 2 = 2.00', () => {
    expect(ceil(1.999, 2)).toBe(2.00);
  });

  test('CEIL07: 0 with precision 0 = 0', () => {
    expect(ceil(0, 0)).toBe(0);
  });

  test('CEIL08: NaN with precision 0 = NaN', () => {
    expect(ceil(NaN, 0)).toBeNaN();
  });

  test('CEIL09: 2.35 with undefined precision = 3', () => {
    expect(ceil(2.35)).toBe(3);
  });
});
