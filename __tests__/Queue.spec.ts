import Queue from "../src/Queue";

test("Queue", () => {
  const list = new Queue<number>();
  
  list.enqueue(5);

  list.enqueue(7);

  list.enqueue(9);

  expect(list.dequeue()).toEqual(5);
  
  expect(list.size()).toEqual(2);

  debugger;

  list.enqueue(11);

  debugger;

  expect(list.dequeue()).toEqual(7);

  expect(list.dequeue()).toEqual(9);

  expect(list.peek()).toEqual(11);

  expect(list.dequeue()).toEqual(11);

  expect(list.dequeue()).toEqual(undefined);

  expect(list.size()).toEqual(0);

  list.enqueue(69);

  expect(list.peek()).toEqual(69);

  expect(list.size()).toEqual(1);
});
