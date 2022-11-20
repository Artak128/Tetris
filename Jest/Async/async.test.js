const Ajax = require("./async");
const axios = require("axios");

jest.mock("axios"); // Axios-ic import arac cankacac ban mock-ac a. Te inch hnaravorutyun a tali da mez Grvaca 2rd description-i mej

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

describe("Ajax GET", () => {
  let response;
  let todos;

  beforeEach(() => {
    todos = [{ id: 1, title: "Todo 1", completed: false }];
    response = {
      data: {
        todos,
      },
    };
  });

  test("Should return data from backend", () => {
    axios.get.mockReturnValue(response); // Qani vor verevum arden mock-el enq , da mez nor hnaravorutyunner a tvel
    //Ays orinakum asum enq vor erb aystex axios-i get metod@ ogtagorcvi apa zapros chani, ayl dra poxaren veradarcni
    // mockReturnValue()-in tvac arjeq@, tvyal depqum response-@, verjinis arjeq@ tvaca beforeEach-um:

    return Ajax.get().then((data) => {
      console.log(data);
      // Qani vor Ajax-i get metodi mej ogtagorcvuma axios-i get metod@ apa ira vra el a azdum, nshanakuma request chi ani ayl kveradarcni mer tvac arjeq@
      expect(data.todos).toEqual(todos);
    });
  });
});
