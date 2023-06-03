type Node<T> = {
  value: T,
  prev?: Node<T>
};

export default class Stack<T> {
  private length: number;

  private head?: Node<T>;

  constructor() {
    this.head = undefined;

    this.length = 0;
  }

  push(item: T): void {
    const node = { value: item } as Node<T>;

    if (this.isEmpty()) {
      this.head = node;

      this.length++;

      return;
    }

    node.prev = this.head;

    this.head = node;

    this.length++;
  }

  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1);

    const head = this.head;

    this.head = (this.isEmpty()) ? undefined : head.prev;

    return head?.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }

  size(): number {
    return this.length;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }
}
