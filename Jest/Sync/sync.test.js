// toBe -> its for primitive type; toEqual -> its for referance type !!!
const Lodash = require("./sync");

describe("Lodash: compact", () => {
  // beforeEach(); //  called before every test case
  // beforeAll(); //  called before the first test method only once
  // afterEach(); // called after every test case
  // afterAll(); // called after all test method only once
  let array = [];
  beforeEach(() => {
    array = [false, 42, 0, true, null, "hello"];
  });
  const lodash = new Lodash();

  test("Should be defined", () => {
    expect(lodash.compact).toBeDefined();
    expect(lodash.compact).not.toBeUndefined();
  });

  test("Should remove false values from array", () => {
    const result = [42, true, "hello"];
    expect(lodash.compact(array)).toEqual(result);
  });

  test("Should not contain falsy values", () => {
    expect(lodash.compact(array)).not.toContain(false);
    expect(lodash.compact(array)).not.toContain("");
    expect(lodash.compact(array)).not.toContain(0);
    expect(lodash.compact(array)).not.toContain(null);
  });
});

describe("Lodash: groupBy", () => {
  const lodash = new Lodash();
  test("Should be defined", () => {
    expect(lodash.groupBy).toBeDefined();
    expect(lodash.groupBy).not.toBeUndefined();
  });

  test("Should group array items by Math.floor", () => {
    const array = [2.2, 2.4, 2.4, 3.1];
    const result = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1],
    };
    expect(lodash.groupBy(array, Math.floor)).toEqual(result);
  });

  test("Should group array items by length", () => {
    const array = ["one", "two", "three"];
    const result = {
      5: ["three"],
      3: ["one", "two"],
    };
    expect(lodash.groupBy(array, "length")).toEqual(result);
  });

  test("Should not return array", () => {
    expect(lodash.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
  });
});
