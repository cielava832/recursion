import { mergeSort } from "./mergeSort.js";

describe("Recursive merge sort", () => {
  test("Merge sort array with 0 items", () => {
    expect(mergeSort([])).toEqual([]);
  });

  test("Merge sort array with 1 items", () => {
    expect(mergeSort([73])).toEqual([73]);
  });

  test("Merge sort array with 5 items", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("Merge sort array with 8 items", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test("Merge sort array with 4 items", () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
  });
});