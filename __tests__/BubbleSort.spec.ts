import bubbleSort from "../src/BubbleSort";

test("Bubble sort", () => {
	const array = [9, 3, 7, 4, 69, 420, 42];

	const sortedArray = [3, 4, 7, 9, 42, 69, 420];

	debugger;

	expect(bubbleSort(array)).toEqual(sortedArray);
});
