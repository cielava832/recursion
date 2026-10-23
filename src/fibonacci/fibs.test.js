import { fibs, fibsRec } from "./fibs.js";

describe("Fibonacci iterative method", () => {
  test("Fibonacci with 1", () => {
    expect(fibs(1)).toEqual([0]);
  });

  test("Fibonacci with 2", () => {
    expect(fibs(2)).toEqual([0, 1]);
  });

  test("Fibonacci with 3", () => {
    expect(fibs(3)).toEqual([0, 1, 1]);
  });

  test("Fibonacci with 4", () => {
    expect(fibs(4)).toEqual([0, 1, 1, 2]);
  });

  test("Fibonacci with 5", () => {
    expect(fibs(5)).toEqual([0, 1, 1, 2, 3]);
  });
});

describe("Fibonacci recursive method", () => {
  test("Fibonacci with 1", () => {
    expect(fibsRec(1)).toEqual([0]);
  });

  test("Fibonacci with 2", () => {
    expect(fibsRec(2)).toEqual([0, 1]);
  });

  test("Fibonacci with 3", () => {
    expect(fibsRec(3)).toEqual([0, 1, 1]);
  });

  test("Fibonacci with 4", () => {
    expect(fibsRec(4)).toEqual([0, 1, 1, 2]);
  });

  test("Fibonacci with 5", () => {
    expect(fibsRec(5)).toEqual([0, 1, 1, 2, 3]);
  });
});