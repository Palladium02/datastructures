export class LinkedNode<T> {
  public value: T;
  public next: LinkedNode<T> | null;
  constructor(value: T, next: LinkedNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList<T> {
  public head: LinkedNode<T> | null;
  public size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  public setHead(value: T) {
    this.head = new LinkedNode<T>(value, this.head);
    this.size++;
    return this;
  }

  public insert(value: T) {
    let node = new LinkedNode<T>(value);
    let current;

    if (!this.head) {
      this.head = node;
      this.size++;
      return this;
    }

    current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = node;
    this.size++;
    return this;
  }

  public insertAt(value: T, index: number) {
    if (index > 0 && index > this.size) return this;
    if (index === 0) {
      this.setHead(value);
      return this;
    }

    let node = new LinkedNode(value);
    let current, previous : LinkedNode<T> | null;

    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current!.next;
      count++;
    }

    node.next = current;
    previous!.next = node;
    this.size++;
    return this;
  }

  public getAt(index: number) {
    if (index > this.size) return undefined;
    
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current.value;
      }
      count++;
      current = current.next;
    }

    return undefined;
  }

  public deleteAt(index: number) {
    if (index < 0 || index > this.size) return this;
    
    let current = this.head;
    let previous: LinkedNode<T> | null;
    let count = 0;

    if (index === 0) {
      this.head = current!.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current!.next;
      }
      previous!.next = current!.next;
    }

    this.size--;
    return this;
  }
}
