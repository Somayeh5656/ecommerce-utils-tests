import slice from '../src/slice.js';

describe('slice()', () => {
  test('slices normally', () => {
    expect(slice([1,2,3,4], 2)).toEqual([3,4]);
  });

  test('slices with end index', () => {
    expect(slice([1,2,3,4], 1, 3)).toEqual([2,3]);
  });

  test('handles negative start', () => {
    expect(slice([1,2,3,4], -2)).toEqual([3,4]);
  });

  test('handles empty array', () => {
    expect(slice([], 1)).toEqual([]);
  });
});
