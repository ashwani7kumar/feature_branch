import reducer, { add, remove, CartState } from "../CartSlice";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({ cartItems: [] });
});
