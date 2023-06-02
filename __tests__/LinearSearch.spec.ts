import linearSearch from "../src/LinearSearch";

describe("LinearSearchList", () => {
  test("Linear search array", () => {
    const list = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
    
    expect(linearSearch(list, 69)).toEqual(true);

    expect(linearSearch(list, 1336)).toEqual(false);

    expect(linearSearch(list, 69420)).toEqual(true);

    expect(linearSearch(list, 69421)).toEqual(false);

    expect(linearSearch(list, 1)).toEqual(true);

    expect(linearSearch(list, 0)).toEqual(false);
  });
});
