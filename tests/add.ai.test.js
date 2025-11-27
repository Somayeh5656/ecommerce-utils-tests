import add from '../src/add.js';

describe('AI-generated tests for add()', () => {
  
  test('adds two positive numbers', () => {
    expect(add(5, 7)).toBe(12);
  });

  test('adds negative numbers', () => {
    expect(add(-5, -3)).toBe(-8);
  });

  test('adds positive and negative number', () => {
    expect(add(-5, 3)).toBe(-2);
  });

  test('adds zero correctly', () => {
    expect(add(0, 0)).toBe(0);
    expect(add(5, 0)).toBe(5);
    expect(add(0, 7)).toBe(7);
  });

  test('adds floating-point numbers', () => {
    expect(add(2.5, 1.2)).toBeCloseTo(3.7, 5);
  });

  test('handles NaN input', () => {
    expect(add(NaN, 4)).toBeNaN();
    expect(add(3, NaN)).toBeNaN();
  });

  test('handles Infinity', () => {
    expect(add(Infinity, 1)).toBe(Infinity);
    expect(add(-Infinity, -1)).toBe(-Infinity);
  });

  test('coerces numeric strings to numbers', () => {
    expect(add('5', 5)).toBe(10);
    expect(add('3.2', '2.3')).toBeCloseTo(5.5, 5);
  });

  test('handles undefined or null as 0', () => {
    expect(add(undefined, 3)).toBe(3);
    expect(add(5, undefined)).toBe(5);
    expect(add(null, 2)).toBe(2);
  });

});
