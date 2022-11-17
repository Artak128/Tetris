const { map } = require("./mock");

describe("Map function", () => {
  let array;
  let fn;

  beforeEach(() => {
    array = [1, 2, 3, 5];
    fn = jest.fn((x) => x ** 2); // Mock-eluc heto karoxanum enq hetevel function-in : Jest-i fn-@ decoratori der a katarum u veradarcnuma mer tvac callback-@ havelyal funkcional avelacnelov, vori mijocovel karoxanuma hetevi tvyal callback-in:
  });

  test("Should call callback", () => {
    map(array, fn);
    expect(fn).toBeCalled();
    expect(fn).toBeCalledTimes(4);
  });
});

//1:15:10
