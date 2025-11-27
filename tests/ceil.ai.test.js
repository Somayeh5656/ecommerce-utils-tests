
import ceil from '../src/ceil.js';

describe('AI-generated tests for ceil()', () => {

  test('rounds positive numbers with default precision', () => {
    expect(ceil(4.01)).toBe(5);
  });

  test('rounds positive numbers with positive precision', () => {
    expect(ceil(6.001, 2)).toBe(6.01);
    expect(ceil(2.345, 1)).toBe(2.4);
  });

  test('rounds negative numbers correctly', () => {
    expect(ceil(-4.2)).toBe(-4);
    expect(ceil(-3.456, 2)).toBe(-3.45);
  });

  test('rounds numbers with negative precision', () => {
    expect(ceil(6040, -2)).toBe(6100);
    expect(ceil(123, -1)).toBe(130);
  });

  test('handles zero', () => {
    expect(ceil(0)).toBe(0);
    expect(ceil(0, 2)).toBe(0);
  });

  test('handles NaN', () => {
    expect(ceil(NaN)).toBeNaN();
  });

  test('handles Infinity', () => {
    expect(ceil(Infinity)).toBe(Infinity);
    expect(ceil(-Infinity)).toBe(-Infinity);
  });

  test('handles undefined precision (defaults to 0)', () => {
    expect(ceil(2.35)).toBe(3);
  });

  test('currency rounding edge case', () => {
    expect(ceil(1.999, 2)).toBe(2.00);
  });

});
