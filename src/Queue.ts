type Node<T> = {
  value: T,
  next?: Node<T>
};

export default class Queue<T> {
  private length: number;

  private head?: Node<T>;

  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;

    this.length = 0;
  }

  enqueue(item: T): void {
    const node = { value: item } as Node<T>;

    if (this.isEmpty()) {
      this.tail = this.head = node;
    }

    this.tail.next = node;

    this.tail = node;

    this.length++;
  }

  dequeue(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    this.length--;

    const head = this.head;

    this.head = this.head.next;

    head.next = undefined;

    if (this.isEmpty()) {
      this.tail = undefined;
    }

    return head.value;
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
