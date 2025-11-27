import capitalize from '../src/capitalize.js';

describe('capitalize()', () => {
  test('capitalizes first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('lowercases the rest', () => {
    expect(capitalize('FRED')).toBe('Fred');
  });

  test('handles empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('handles non-string inputs', () => {
    expect(capitalize(123)).toBe('123');
  });
});
