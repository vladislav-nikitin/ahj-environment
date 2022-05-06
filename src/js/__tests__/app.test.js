import demo from "../app";

test("check demo", () => {
  expect(demo(123)).toBe(123);
});
