import camelCase from '../src/camelCase.js';

describe('camelCase()', () => {
  test('converts normal string', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar');
  });

  test('converts dashed string', () => {
    expect(camelCase('--foo-bar--')).toBe('fooBar');
  });

  test('converts snake case', () => {
    expect(camelCase('__FOO_BAR__')).toBe('fooBar');
  });

  test('handles empty input', () => {
    expect(camelCase('')).toBe('');
  });
});
