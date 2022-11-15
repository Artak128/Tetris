const Ajax = require("./async");

const data = "some data";

describe("Ajax: echo", () => {
  test("Should return value async", async () => {
    const result = await Ajax.echo(data);
    expect(result).toBe(data);
  });

  test("Should return value with promise", () => {
    Ajax.echo(data).then((data) => {
      expect(data).toBe("some data");
    });
  });

  test("Should catch error with promise", () => {
    Ajax.echo().catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });
  });

  test("Should catch error with promise", async () => {
    try {
      await Ajax.echo();
    } catch (e) {
      expect(e.message).toBe("Error");
    }
  });
});
