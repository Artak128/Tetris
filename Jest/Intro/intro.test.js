// https://jestjs.io/ru/docs/using-matchers
// expect -> is global function
const { sum, nativeNull } = require("./intro");

describe("Sum function:", () => {
  test("Should return sum of two values", () => {
    expect(sum(1, 3)).toBe(4);
  });

  test("Should return value correctly comparing to other", () => {
    expect(sum(2, 3)).toBeGreaterThan(4);
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
    expect(sum(2, 3)).toBeGreaterThanOrEqual(1);
  });

  test("Should sum 2 float values correctly", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe("Native Null function:", () => {
  test("Should return false value null", () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy(); // undefined, null, 0, ""
    expect(nativeNull()).toBeDefined(); // null is a defined value !!!
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  });
});
// 38:00
