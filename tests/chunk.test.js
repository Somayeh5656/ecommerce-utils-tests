import chunk from '../src/chunk.js';

describe('chunk()', () => {
  test('chunks evenly', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a','b'], ['c','d']]);
  });

  test('chunks unevenly', () => {
    expect(chunk(['a','b','c','d'], 3)).toEqual([['a','b','c'], ['d']]);
  });

  test('size larger than array', () => {
    expect(chunk(['a','b'], 5)).toEqual([['a','b']]);
  });

  test('empty array', () => {
    expect(chunk([], 2)).toEqual([]);
  });
});
