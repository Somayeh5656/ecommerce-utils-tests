import compact from '../src/compact.js';

describe('compact()', () => {
  test('removes falsey values', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
  });

  test('handles array with no falsey values', () => {
    expect(compact([1,2,3])).toEqual([1,2,3]);
  });

  test('handles empty array', () => {
    expect(compact([])).toEqual([]);
  });
});
