import toString from '../src/toString.js';

describe('toString()', () => {
  test('converts number to string', () => {
    expect(toString(123)).toBe('123');
  });

  test('converts array to string', () => {
    expect(toString([1,2,3])).toBe('1,2,3');
  });

  test('null returns empty string', () => {
    expect(toString(null)).toBe('');
  });

  test('preserves negative zero', () => {
    expect(toString(-0)).toBe('-0');
  });
});
