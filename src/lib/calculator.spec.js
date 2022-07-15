const { sum } = require("./calculator");
it("should sum 2 and 2 and the result must be 4", () => {
  expect(sum(2, 2)).toBe(4);
});

it("should sum 2 and 2 even if one them is a string or two as string", () => {
  expect(sum("2", "2")).toBe(4);
});

it("should throww an error if what is provided to the method cannot be summed", () => {
  expect(() => {
    sum("", 2);
  }).toThrowError();

  expect(() => {
    sum([2, 2]);
  }).toThrowError();

  expect(() => {
    sum({ input: 2 });
  }).toThrowError();
});
