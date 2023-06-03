import binarySearch from "../src/BinarySearch";

test("binary search array", () => {
   const list = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
    
    expect(binarySearch(list, 69)).toEqual(true);

    expect(binarySearch(list, 1336)).toEqual(false);

    expect(binarySearch(list, 69420)).toEqual(true);

    expect(binarySearch(list, 69421)).toEqual(false);

    expect(binarySearch(list, 1)).toEqual(true);

    expect(binarySearch(list, 0)).toEqual(false);
});
