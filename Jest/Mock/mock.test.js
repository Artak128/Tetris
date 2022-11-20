const { map } = require("./mock");

describe("Map function", () => {
  let array;
  let fn;

  beforeEach(() => {
    array = [1, 2, 3, 5];
    fn = jest.fn((x) => x ** 2); // Mock-eluc heto karoxanum enq hetevel function-in : Jest-i fn-@ decoratori der a katarum u veradarcnuma mer tvac callback-@ havelyal funkcional avelacnelov, vori mijocovel karoxanuma hetevi tvyal callback-in:
    map(array, fn);
  });

  test("Should call callback", () => {
    expect(fn).toBeCalled();
  });

  test("Should call callback 4 times", () => {
    expect(fn).toBeCalledTimes(4);
    expect(fn.mock.calls.length).toBe(4); // !! mock exac functionner@ unen (mock) property-in vor@ object a u ira mej parunakuma informaciya tvyal function-i masin!!
  });

  test("Should pow 2 each element", () => {
    // for (let index = 0; index < fn.mock.result.length; index++) { !!! Sxal a for loop chenq kara grenq test-i mej.Dra hamar kanchum enq each method@ storev bervac orinakum !!!
    //   expect(fn.mock.result[index].value).toBe(array[index ** 2]);
    // }

    expect(fn.mock.results[0].value).toBe(1);
    expect(fn.mock.results[1].value).toBe(4);
    expect(fn.mock.results[2].value).toBe(9);
    expect(fn.mock.results[3].value).toBe(25);
  });

  test.each([1, 2, 3, 5])("Should pow 2 each element ForLoop", (item) => {
    expect(fn(item[0])).toBe(item[0] ** 2);
  });

  test("Should function work", () => {
    //Ays Orinakum mock-um enq veradarcvox arjeqner@,
    //Hetevyal orinakum asum enq vor arajin angam kanchveluc petq a veradarcni -> 100
    //Erkrord angam kanchveluc petq a veradarcni -> 200
    //Erkrordic heto kanchveluc misht petqa a veradarcni -> "42"
    fn.mockReturnValueOnce(100).mockReturnValueOnce(200).mockReturnValue("42");

    expect(fn()).toBe(100);
    expect(fn()).toEqual(200);
    expect(fn()).toEqual("42");
    expect(fn()).toEqual("42");
  });
});

//1:15:10

//
//Jest-i mock-i u expect-i implementaciayi tarberak
// var jest = {
//   condition: {},
//   fn: function decorator(callback) {
//     return function c() {
//       ++jest.condition[c] || (jest.condition[c] = 1);
//       callback();
//     };
//   }
// };
// const mockedFunc = jest.fn(() => console.log("Called!"));
// mockedFunc();
// mockedFunc();
// function expect(func) {
//   return {
//     toBeCalledTime: (number) => {
//       console.log(number === jest.condition[func]);
//     }
//   };
// }
// expect(mockedFunc).toBeCalledTime(2); // true !
