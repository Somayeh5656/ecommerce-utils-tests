import endsWith from '../src/endsWith.js';

describe('endsWith()', () => {
  test('returns true when match', () => {
    expect(endsWith('abc', 'c')).toBe(true);
  });

  test('returns false when no match', () => {
    expect(endsWith('abc', 'b')).toBe(false);
  });

  test('supports position argument', () => {
    expect(endsWith('abc', 'b', 2)).toBe(true);
  });

  test('handles empty string', () => {
    expect(endsWith('', '')).toBe(true);
  });
});
